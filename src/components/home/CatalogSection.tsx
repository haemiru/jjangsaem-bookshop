import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import EbookCard from "@/components/ebook/EbookCard";
import { ebooks } from "@/data/ebooks";

export default function CatalogSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="짱샘의 전자책"
          subtitle="실전에서 바로 써먹을 수 있는 전자책을 소개합니다"
        />
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {ebooks.map((ebook) => (
            <EbookCard key={ebook.slug} ebook={ebook} />
          ))}
        </div>
      </Container>
    </section>
  );
}
