import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "블로그",
  description: "바이브 코딩, AI 활용, 전자책 출판에 관한 유용한 글 모음.",
};

export default function BlogListPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="블로그"
          subtitle="AI와 바이브 코딩에 관한 유용한 글을 공유합니다"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
}
