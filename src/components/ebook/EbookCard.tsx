import Link from "next/link";
import Image from "next/image";
import { Ebook } from "@/types/ebook";
import Badge from "@/components/shared/Badge";

interface EbookCardProps {
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  return (
    <Link href={`/ebook/${ebook.slug}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-bg-primary transition-all hover:shadow-lg">
        {/* Cover with text overlay */}
        <div
          className={`relative aspect-[3/4] overflow-hidden ${ebook.coverHasText ? "bg-white" : `bg-gradient-to-br ${ebook.colors.gradient}`}`}
        >
          <Image
            src={ebook.coverImage}
            alt={ebook.title}
            fill
            className={`${ebook.coverHasText ? "object-contain" : "object-cover"} transition-transform group-hover:scale-105`}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          {/* Text overlay */}
          {!ebook.coverHasText && (
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/40 via-transparent to-black/50 p-2.5 pt-4">
              <h3 className="text-sm font-extrabold leading-snug text-white drop-shadow-lg sm:text-base" style={{ wordBreak: "keep-all" }}>
                {ebook.title}
              </h3>
              <div>
                <p className="text-[10px] text-white/80 drop-shadow" style={{ wordBreak: "keep-all" }}>{ebook.subtitle}</p>
                <p className="mt-1 text-[10px] text-white/60 drop-shadow">장지예 · 피지오 후각 연구소</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-3">
          <Badge color={ebook.colors.primary} className="mb-2 text-[10px]">
            {ebook.category}
          </Badge>

          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-primary">
              {ebook.price.toLocaleString()}원
            </span>
            {ebook.originalPrice && (
              <span className="text-[10px] text-text-muted line-through">
                {ebook.originalPrice.toLocaleString()}원
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
