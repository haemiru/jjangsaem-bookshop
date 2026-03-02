import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    if (supabase) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        const separator = next.includes("?") ? "&" : "?";
        return NextResponse.redirect(`${origin}${next}${separator}_auth=1`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/auth?error=auth_failed`);
}
