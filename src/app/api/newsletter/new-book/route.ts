import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/service";
import { sendNewBookEmail } from "@/lib/email";
import { ebooks } from "@/data/ebooks";

export async function POST(request: Request) {
  try {
    // 간단한 API 키 인증
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.NEWSLETTER_API_KEY}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = await request.json();

    const book = ebooks.find((e) => e.slug === slug);
    if (!book) {
      return NextResponse.json(
        { error: "해당 전자책을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    const supabase = createServiceClient();

    // 활성 구독자 목록 조회
    const { data: subscribers, error: fetchError } = await supabase
      .from("subscribers")
      .select("email")
      .eq("subscribed", true);

    if (fetchError) {
      console.error("Fetch subscribers error:", fetchError);
      return NextResponse.json(
        { error: "구독자 목록을 가져올 수 없습니다." },
        { status: 500 }
      );
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ message: "활성 구독자가 없습니다.", sent: 0 });
    }

    // 각 구독자에게 이메일 발송 (실패해도 나머지 계속 발송)
    let sent = 0;
    let failed = 0;
    for (const subscriber of subscribers) {
      try {
        await sendNewBookEmail(subscriber.email, book);
        sent++;
      } catch {
        failed++;
        console.error(`Failed to send to ${subscriber.email}`);
      }
    }

    return NextResponse.json({
      message: `신간 알림 발송 완료: ${book.title}`,
      sent,
      failed,
      total: subscribers.length,
    });
  } catch {
    return NextResponse.json(
      { error: "요청을 처리할 수 없습니다." },
      { status: 500 }
    );
  }
}
