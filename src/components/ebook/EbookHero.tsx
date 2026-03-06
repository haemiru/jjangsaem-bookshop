import Image from "next/image";
import { Ebook } from "@/types/ebook";
import Badge from "@/components/shared/Badge";

interface EbookHeroProps {
  ebook: Ebook;
}

export default function EbookHero({ ebook }: EbookHeroProps) {
  return (
    <div
      className={`flex flex-col items-center gap-8 rounded-3xl bg-gradient-to-br ${ebook.colors.gradient} p-8 text-white sm:flex-row sm:p-12`}
    >
      {/* Cover with title overlay */}
      <div className="relative h-52 w-40 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl sm:h-72 sm:w-52">
        <Image
          src={ebook.coverImage}
          alt={ebook.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 160px, 208px"
          priority
        />
        {!ebook.coverHasText && (
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3">
            <p className="text-sm font-extrabold leading-tight text-white drop-shadow-lg sm:text-base">
              {ebook.title}
            </p>
            <p className="mt-0.5 text-[10px] text-white/70">{ebook.author}</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <Badge className="mb-3 bg-white/20 text-white">{ebook.category}</Badge>
        <h1 className="mb-2 text-2xl font-extrabold leading-tight sm:text-3xl">
          {ebook.title}
        </h1>
        <p className="mb-4 text-base text-white/80">{ebook.subtitle}</p>
        <div className="flex items-center gap-3 text-sm text-white/70">
          <span>✍️ {ebook.author}</span>
          <span>·</span>
          <span>📄 {ebook.pageCount}페이지</span>
          <span>·</span>
          <span>📅 {ebook.publishedDate}</span>
        </div>
      </div>
    </div>
  );
}
