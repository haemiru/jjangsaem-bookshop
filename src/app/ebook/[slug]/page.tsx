import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import EbookHero from "@/components/ebook/EbookHero";
import TocSection from "@/components/ebook/TocSection";
import PurchaseCard from "@/components/ebook/PurchaseCard";
import AuthorCard from "@/components/ebook/AuthorCard";
import { ebooks, getEbookBySlug, getAllSlugs } from "@/data/ebooks";
import { blogPosts } from "@/data/blogPosts";
import EbookCard from "@/components/ebook/EbookCard";
import BlogCard from "@/components/blog/BlogCard";
import { getTestimonialsBySlug } from "@/data/testimonials";
import TestimonialCarousel from "@/components/ebook/TestimonialCarousel";
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
  const bookTestimonials = getTestimonialsBySlug(ebook.slug);

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

          {bookTestimonials.length > 0 && (
            <TestimonialCarousel
              testimonials={bookTestimonials}
              accentColor={ebook.colors.primary}
            />
          )}

          {/* Related books */}
          <div className="mt-16">
            <h2 className="mb-6 text-xl font-bold text-text-primary">
              다른 전자책도 살펴보세요
            </h2>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              {(() => {
                const others = ebooks.filter((b) => b.slug !== ebook.slug);
                const sameCategory = others.filter((b) => b.category === ebook.category);
                const rest = others
                  .filter((b) => b.category !== ebook.category)
                  .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
                return [...sameCategory, ...rest].slice(0, 4);
              })().map((b) => (
                <EbookCard key={b.slug} ebook={b} />
              ))}
            </div>
            {ebooks.filter((b) => b.slug !== ebook.slug).length > 4 && (
              <div className="mt-8 text-center">
                <Link
                  href="/ebook"
                  className="inline-block rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  전체 보기
                </Link>
              </div>
            )}
          </div>
          {/* Related blog posts */}
          {(() => {
            const related = blogPosts
              .filter((p) => p.category === ebook.category)
              .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
            if (related.length === 0) return null;
            const displayed = related.slice(0, 3);
            return (
              <div className="mt-16">
                <h2 className="mb-6 text-xl font-bold text-text-primary">
                  관련 블로그
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {displayed.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
                {related.length > 3 && (
                  <div className="mt-8 text-center">
                    <Link
                      href="/blog"
                      className="inline-block rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      블로그 더보기
                    </Link>
                  </div>
                )}
              </div>
            );
          })()}
        </Container>
      </div>
    </>
  );
}
