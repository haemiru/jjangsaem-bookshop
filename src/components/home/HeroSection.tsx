import Link from "next/link";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#162d47] py-20 sm:py-28">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-white/5 blur-2xl" />

      <Container className="relative text-center">
        <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
          후각·호흡·수면 — 감각 기반 치유 전문
        </p>
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
          짱샘의 책방에서
          <br />
          <span className="text-secondary">감각 치유 전자책</span>을 만나보세요
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          발달장애 아동의 후각 훈련, 수면 개선, 부모 내면 치유까지.
          <br />
          현장 전문가가 만든 실전 가이드 5권.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/ebook"
            className="rounded-full bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-lg transition-colors hover:bg-secondary-dark"
          >
            전자책 둘러보기
          </Link>
          <Link
            href="/about"
            className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            짱샘 소개
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <span>📚 전자책 5권</span>
          <span className="hidden sm:inline">·</span>
          <span>🏥 피지오 후각 연구소</span>
          <span className="hidden sm:inline">·</span>
          <span>👩‍⚕️ 현장 전문가 집필</span>
        </div>
      </Container>
    </section>
  );
}
