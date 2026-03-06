import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPreviewSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="블로그"
          subtitle="AI와 바이브 코딩에 관한 유용한 글"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...blogPosts].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate)).slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            블로그 더 보기
          </Link>
        </div>
      </Container>
    </section>
  );
}
