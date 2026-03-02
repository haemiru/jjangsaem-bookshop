import { TocItem } from "@/types/ebook";

interface TocSectionProps {
  toc: TocItem[];
  accentColor: string;
}

export default function TocSection({ toc, accentColor }: TocSectionProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold text-text-primary">목차</h2>
      <div className="space-y-4">
        {toc.map((item) => (
          <div key={item.chapter} className="rounded-xl border border-border p-4">
            <div className="mb-2 flex items-center gap-2">
              <span
                className="rounded-md px-2 py-0.5 text-xs font-bold text-white"
                style={{ backgroundColor: accentColor }}
              >
                {item.chapter}
              </span>
              <span className="font-semibold text-text-primary">{item.title}</span>
            </div>
            {item.items && (
              <ul className="ml-4 space-y-1">
                {item.items.map((sub) => (
                  <li key={sub} className="text-sm text-text-muted">
                    · {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
