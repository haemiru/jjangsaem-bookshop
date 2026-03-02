import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
      <Container className="text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          지금 바로 시작하세요
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
          후각 훈련과 감각 기반 치유, 어디서부터 시작해야 할지 막막하셨나요?
          짱샘의 전자책이 첫걸음을 도와드립니다.
        </p>
        <Link
          href="/ebook"
          className="mt-8 inline-block rounded-full bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-lg transition-colors hover:bg-secondary-dark"
        >
          전자책 카탈로그 보기
        </Link>
      </Container>
    </section>
  );
}
