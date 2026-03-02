import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceClient } from "@/lib/supabase/service";
import { getEbookBySlug } from "@/data/ebooks";

export async function POST(request: NextRequest) {
  const { paymentKey, orderId, amount, slug } = await request.json();

  // 1. 사용자 인증 확인
  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: "서버 설정 오류" }, { status: 500 });
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
  }

  // 2. ebook 존재 및 금액 검증
  const ebook = getEbookBySlug(slug);
  if (!ebook) {
    return NextResponse.json({ error: "존재하지 않는 전자책입니다." }, { status: 400 });
  }

  if (ebook.price !== amount) {
    return NextResponse.json({ error: "결제 금액이 일치하지 않습니다." }, { status: 400 });
  }

  // 3. Toss Payments 최종 승인 (테스트 모드가 아닌 경우만)
  const isTestMode = paymentKey?.startsWith("test_") && orderId?.startsWith("test_order_");

  if (!isTestMode) {
    const secretKey = process.env.TOSS_SECRET_KEY!;
    const basicToken = Buffer.from(`${secretKey}:`).toString("base64");

    const tossResponse = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentKey, orderId, amount }),
    });

    if (!tossResponse.ok) {
      const errorData = await tossResponse.json();
      return NextResponse.json(
        { error: errorData.message || "결제 승인에 실패했습니다." },
        { status: 400 }
      );
    }
  }

  // 4. DB에 구매 기록 저장 (서비스 롤)
  const serviceClient = createServiceClient();
  const { error: dbError } = await serviceClient.from("purchases").insert({
    user_id: user.id,
    ebook_slug: ebook.slug,
    ebook_title: ebook.title,
    amount: ebook.price,
    payment_key: paymentKey,
    order_id: orderId,
    status: "paid",
  });

  if (dbError) {
    console.error("Purchase record failed:", dbError);
    return NextResponse.json(
      { error: "구매 기록 저장에 실패했습니다." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
