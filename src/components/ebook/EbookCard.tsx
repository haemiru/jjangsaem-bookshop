import Link from "next/link";
import { Ebook } from "@/types/ebook";
import Badge from "@/components/shared/Badge";

interface EbookCardProps {
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  return (
    <Link href={`/ebook/${ebook.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-border bg-bg-primary transition-all hover:shadow-lg">
        {/* Cover placeholder */}
        <div
          className={`flex h-48 items-center justify-center bg-gradient-to-br ${ebook.colors.gradient}`}
        >
          <span className="text-6xl transition-transform group-hover:scale-110">
            {ebook.coverEmoji}
          </span>
        </div>

        <div className="p-5">
          <Badge color={ebook.colors.primary} className="mb-3">
            {ebook.category}
          </Badge>
          <h3 className="mb-1 text-lg font-bold leading-tight text-text-primary group-hover:text-primary">
            {ebook.title}
          </h3>
          <p className="mb-3 text-sm text-text-muted">{ebook.subtitle}</p>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              {ebook.price.toLocaleString()}원
            </span>
            {ebook.originalPrice && (
              <span className="text-sm text-text-muted line-through">
                {ebook.originalPrice.toLocaleString()}원
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
