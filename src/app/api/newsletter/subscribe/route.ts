import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/service";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    const { data: existing } = await supabase
      .from("subscribers")
      .select("id, subscribed")
      .eq("email", email)
      .single();

    if (existing) {
      if (existing.subscribed) {
        return NextResponse.json(
          { message: "이미 구독 중인 이메일입니다." },
          { status: 200 }
        );
      }
      // 이전에 구독 취소한 경우 재구독
      await supabase
        .from("subscribers")
        .update({ subscribed: true })
        .eq("id", existing.id);

      return NextResponse.json({ message: "다시 구독해주셔서 감사합니다!" });
    }

    const { error } = await supabase
      .from("subscribers")
      .insert({ email, subscribed: true });

    if (error) {
      console.error("Newsletter subscribe error:", error);
      return NextResponse.json(
        { error: "구독 처리 중 문제가 발생했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "구독해주셔서 감사합니다!" });
  } catch {
    return NextResponse.json(
      { error: "요청을 처리할 수 없습니다." },
      { status: 500 }
    );
  }
}
