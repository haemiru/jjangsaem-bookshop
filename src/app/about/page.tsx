import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "소개",
  description: "짱샘의 치유책방 소개. 발달장애 아동과 가족을 위한 감각 기반 치유 전자책을 만듭니다.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <h1 className="mb-6 text-3xl font-extrabold text-text-primary">
          짱샘의 치유책방 소개
        </h1>

        <div className="space-y-6 text-base leading-relaxed text-text-secondary">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-bg-warm p-6">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-3xl">
              👩‍⚕️
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold text-text-primary">짱샘 · 피지오 후각 연구소</h2>
              <p>
                피지오 후각 연구소와 함께
                발달장애 아동의 후각 훈련, 수면 개선, 부모 치유 프로그램을 연구하고
                실전 가이드를 만들고 있습니다.
              </p>
            </div>
          </div>

          <p>
            짱샘의 치유책방은 발달장애 아동과 그 가족을 위한 전문 전자책 공간입니다.
            후각 훈련, 호흡 기반 수면 개선, 부모 내면 치유 등 감각을 활용한
            치유 프로그램을 체계적으로 정리하여 전달합니다.
          </p>

          <p>
            모든 전자책은 과학적 근거에 기반하며, 현장 전문가의 실전 경험을 담고 있습니다.
            기록지, 체크리스트, 단계별 프로그램으로 가정과 치료실에서 바로 활용할 수 있습니다.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/ebook"
            className="inline-block rounded-full bg-primary px-8 py-3 text-base font-bold text-white hover:bg-primary-dark"
          >
            전자책 둘러보기
          </Link>
        </div>
      </Container>
    </div>
  );
}
