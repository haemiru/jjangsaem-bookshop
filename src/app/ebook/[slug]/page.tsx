import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import EbookHero from "@/components/ebook/EbookHero";
import TocSection from "@/components/ebook/TocSection";
import PurchaseCard from "@/components/ebook/PurchaseCard";
import AuthorCard from "@/components/ebook/AuthorCard";
import { ebooks, getEbookBySlug, getAllSlugs } from "@/data/ebooks";
import { generateBookSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ebook = getEbookBySlug(slug);
  if (!ebook) return {};

  return {
    title: ebook.title,
    description: ebook.description,
    keywords: [ebook.category, "전자책", "짱샘", ebook.title],
    openGraph: {
      title: ebook.title,
      description: ebook.description,
      type: "book",
      locale: "ko_KR",
    },
  };
}

export default async function EbookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const ebook = getEbookBySlug(slug);

  if (!ebook) {
    notFound();
  }

  const schema = generateBookSchema(ebook);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-bg-secondary py-10 sm:py-16">
        <Container>
          <EbookHero ebook={ebook} />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="space-y-8 lg:col-span-2">
              {/* Description */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-text-primary">소개</h2>
                <p className="leading-relaxed text-text-secondary">
                  {ebook.description}
                </p>
              </div>

              <TocSection toc={ebook.toc} accentColor={ebook.colors.primary} />
              <AuthorCard />
            </div>

            {/* Sidebar */}
            <div>
              <PurchaseCard ebook={ebook} />
            </div>
          </div>

          {/* Related books */}
          <div className="mt-16">
            <h2 className="mb-6 text-xl font-bold text-text-primary">
              다른 전자책도 살펴보세요
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ebooks
                .filter((b) => b.slug !== ebook.slug)
                .map((b) => (
                  <a
                    key={b.slug}
                    href={`/ebook/${b.slug}`}
                    className="group rounded-xl border border-border bg-bg-primary p-4 transition-shadow hover:shadow-md"
                  >
                    <div
                      className={`mb-3 flex h-20 items-center justify-center rounded-lg bg-gradient-to-br ${b.colors.gradient}`}
                    >
                      <span className="text-3xl">{b.coverEmoji}</span>
                    </div>
                    <p className="text-sm font-bold text-text-primary group-hover:text-primary">
                      {b.title}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      {b.price.toLocaleString()}원
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
