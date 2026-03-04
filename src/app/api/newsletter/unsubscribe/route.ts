import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/service";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.redirect(
      new URL("/newsletter/unsubscribe?status=error", request.url)
    );
  }

  try {
    const supabase = createServiceClient();

    const { data: subscriber } = await supabase
      .from("subscribers")
      .select("id, subscribed")
      .eq("email", email)
      .single();

    if (!subscriber) {
      return NextResponse.redirect(
        new URL("/newsletter/unsubscribe?status=error", request.url)
      );
    }

    if (!subscriber.subscribed) {
      return NextResponse.redirect(
        new URL("/newsletter/unsubscribe?status=success", request.url)
      );
    }

    const { error } = await supabase
      .from("subscribers")
      .update({ subscribed: false })
      .eq("id", subscriber.id);

    if (error) {
      console.error("Newsletter unsubscribe error:", error);
      return NextResponse.redirect(
        new URL("/newsletter/unsubscribe?status=error", request.url)
      );
    }

    return NextResponse.redirect(
      new URL("/newsletter/unsubscribe?status=success", request.url)
    );
  } catch (err) {
    console.error("Newsletter unsubscribe error:", err);
    return NextResponse.redirect(
      new URL("/newsletter/unsubscribe?status=error", request.url)
    );
  }
}
