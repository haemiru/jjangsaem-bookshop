import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "블로그",
  description: "후각과 호흡이 가진 치유의 힘, 뇌과학으로 풀어드립니다.",
};

export default function BlogListPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          title="블로그"
          subtitle="후각과 호흡이 가진 치유의 힘, 뇌과학으로 풀어드립니다"
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
