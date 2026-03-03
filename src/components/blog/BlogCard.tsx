import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import Badge from "@/components/shared/Badge";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-border bg-bg-primary transition-all hover:shadow-lg">
        {/* Thumbnail */}
        {post.coverImage ? (
          <div className="relative h-36 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : (
          <div
            className="flex h-36 items-center justify-center"
            style={{ backgroundColor: `${post.coverColor}15` }}
          >
            <span className="text-4xl" style={{ color: post.coverColor }}>
              ✍️
            </span>
          </div>
        )}

        <div className="p-5">
          <div className="mb-2 flex items-center gap-2">
            <Badge color={post.coverColor}>{post.category}</Badge>
            <span className="text-xs text-text-muted">{post.readTime}분 읽기</span>
          </div>
          <h3 className="mb-2 text-base font-bold leading-snug text-text-primary group-hover:text-primary">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-sm text-text-muted">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
