import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/service";
import { sendNewBookEmail } from "@/lib/email";
import { ebooks } from "@/data/ebooks";

export async function GET(request: Request) {
  // Vercel Cron 인증 확인
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createServiceClient();

    // 이미 알림 발송된 slug 목록 조회
    const { data: notified } = await supabase
      .from("notified_books")
      .select("slug");

    const notifiedSlugs = new Set((notified ?? []).map((n) => n.slug));

    // 아직 알림 안 보낸 신간 찾기
    const newBooks = ebooks.filter((book) => !notifiedSlugs.has(book.slug));

    if (newBooks.length === 0) {
      return NextResponse.json({ message: "새로운 전자책이 없습니다.", sent: 0 });
    }

    // 활성 구독자 목록
    const { data: subscribers } = await supabase
      .from("subscribers")
      .select("email")
      .eq("subscribed", true);

    if (!subscribers || subscribers.length === 0) {
      // 구독자가 없어도 notified_books에는 기록 (나중에 중복 발송 방지)
      for (const book of newBooks) {
        await supabase.from("notified_books").insert({ slug: book.slug });
      }
      return NextResponse.json({ message: "활성 구독자가 없습니다.", sent: 0 });
    }

    const results = [];

    for (const book of newBooks) {
      let sent = 0;
      let failed = 0;

      for (const subscriber of subscribers) {
        try {
          await sendNewBookEmail(subscriber.email, book);
          sent++;
        } catch {
          failed++;
        }
      }

      // 발송 완료 기록
      await supabase.from("notified_books").insert({ slug: book.slug });

      results.push({ slug: book.slug, title: book.title, sent, failed });
    }

    return NextResponse.json({
      message: "신간 알림 발송 완료",
      books: results,
    });
  } catch (err) {
    console.error("Cron notify-new-books error:", err);
    return NextResponse.json(
      { error: "처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
