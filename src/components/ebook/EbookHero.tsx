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
      {/* Cover */}
      <div className="flex h-52 w-40 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm sm:h-64 sm:w-48">
        <span className="text-7xl sm:text-8xl">{ebook.coverEmoji}</span>
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
