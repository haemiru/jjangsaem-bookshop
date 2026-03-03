import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Badge from "@/components/shared/Badge";
import { blogPosts } from "@/data/blogPosts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.coverImage
      ? { images: [{ url: post.coverImage }] }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <Badge color={post.coverColor} className="mb-4">
          {post.category}
        </Badge>
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-text-primary">
          {post.title}
        </h1>
        <div className="mb-8 flex items-center gap-4 text-sm text-text-muted">
          <span>{post.publishedDate}</span>
          <span>·</span>
          <span>{post.readTime}분 읽기</span>
        </div>

        {post.content ? (
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <div className="rounded-2xl border border-border bg-bg-warm p-8 text-center">
            <p className="mb-4 text-lg font-semibold text-text-primary">
              이 글은 곧 공개됩니다
            </p>
            <p className="mb-6 text-sm text-text-muted">
              블로그 콘텐츠를 준비 중입니다. 조금만 기다려 주세요!
            </p>
            <Link
              href="/blog"
              className="inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              블로그 목록으로
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}
