import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceClient } from "@/lib/supabase/service";
import { getEbookBySlug } from "@/data/ebooks";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // 1. 인증 확인
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

  // 2. ebook 존재 확인
  const ebook = getEbookBySlug(slug);
  if (!ebook) {
    return NextResponse.json({ error: "존재하지 않는 전자책입니다." }, { status: 404 });
  }

  // 3. 구매 확인 (서비스 롤)
  const serviceClient = createServiceClient();
  const { data: purchase } = await serviceClient
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("ebook_slug", slug)
    .eq("status", "paid")
    .limit(1);

  if (!purchase || purchase.length === 0) {
    return NextResponse.json({ error: "구매 기록이 없습니다." }, { status: 403 });
  }

  // 4. Signed URL 발급 (60초)
  const { data: signedUrlData, error: urlError } = await serviceClient.storage
    .from("ebooks")
    .createSignedUrl(ebook.fileKey, 60, {
      download: `${ebook.title}.pdf`,
    });

  if (urlError || !signedUrlData?.signedUrl) {
    return NextResponse.json({ error: "다운로드 URL 생성에 실패했습니다." }, { status: 500 });
  }

  return NextResponse.redirect(signedUrlData.signedUrl);
}
