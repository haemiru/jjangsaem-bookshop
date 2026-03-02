import Link from "next/link";
import Container from "@/components/layout/Container";
import { ebooks } from "@/data/ebooks";

export default function HeroSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-6 sm:py-8">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Left: text content */}
          <div className="text-center sm:text-left">
            <p className="mb-2 text-xs font-medium tracking-wide text-primary">
              후각 · 호흡 · 수면 — 감각 기반 치유 전문
            </p>
            <h1 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
              감각 치유 전자책을 만나보세요
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              발달장애 아동의 후각 훈련, 수면 개선, 부모 내면 치유까지.
              <br className="hidden sm:inline" />
              현장 전문가가 만든 실전 가이드 {ebooks.length}권.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
              <Link
                href="/ebook"
                className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                전자책 둘러보기
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-800"
              >
                짱샘 소개
              </Link>
            </div>
          </div>

          {/* Right: trust signals */}
          <div className="flex shrink-0 items-center gap-4 text-xs text-gray-400 sm:flex-col sm:items-end sm:gap-2">
            <span>📚 전자책 {ebooks.length}권</span>
            <span>🏥 피지오 후각 연구소</span>
            <span>👩‍⚕️ 현장 전문가 집필</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
