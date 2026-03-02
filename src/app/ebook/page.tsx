import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import EbookCard from "@/components/ebook/EbookCard";
import { ebooks } from "@/data/ebooks";

export const metadata: Metadata = {
  title: "전자책",
  description: "짱샘의 감각 치유 전자책 카탈로그. 후각 훈련, 수면 개선, 부모 치유 가이드.",
};

export default function EbookListPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="전자책 카탈로그"
          subtitle="감각 기반 치유와 발달 지원을 위한 전문 전자책"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((ebook) => (
            <EbookCard key={ebook.slug} ebook={ebook} />
          ))}
        </div>
      </Container>
    </div>
  );
}
