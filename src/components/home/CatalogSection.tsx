import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import EbookCard from "@/components/ebook/EbookCard";
import { ebooks } from "@/data/ebooks";

const MAX_DISPLAY = 10;

export default function CatalogSection() {
  const displayedEbooks = ebooks.slice(0, MAX_DISPLAY);
  const hasMore = ebooks.length > MAX_DISPLAY;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="짱샘의 전자책"
          subtitle="실전에서 바로 써먹을 수 있는 전자책을 소개합니다"
        />
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {displayedEbooks.map((ebook) => (
            <EbookCard key={ebook.slug} ebook={ebook} />
          ))}
        </div>
        {hasMore && (
          <div className="mt-10 text-center">
            <Link
              href="/ebook"
              className="inline-block rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              전체 보기
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
