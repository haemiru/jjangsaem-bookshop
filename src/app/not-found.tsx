import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center py-16">
      <Container className="text-center">
        <p className="mb-4 text-6xl">📖</p>
        <h1 className="mb-2 text-3xl font-extrabold text-text-primary">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mb-8 text-text-muted">
          찾으시는 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-primary px-8 py-3 text-base font-bold text-white hover:bg-primary-dark"
        >
          홈으로 돌아가기
        </Link>
      </Container>
    </div>
  );
}
