import { Ebook } from "@/types/ebook";

interface PurchaseCardProps {
  ebook: Ebook;
}

export default function PurchaseCard({ ebook }: PurchaseCardProps) {
  const discount = ebook.originalPrice
    ? Math.round((1 - ebook.price / ebook.originalPrice) * 100)
    : 0;

  return (
    <div className="rounded-2xl border border-border bg-bg-primary p-6 shadow-sm lg:sticky lg:top-24">
      <div className="mb-4">
        {discount > 0 && (
          <span className="mb-1 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
            {discount}% 할인
          </span>
        )}
        <div className="flex items-end gap-2">
          <span className="text-3xl font-extrabold text-text-primary">
            {ebook.price.toLocaleString()}원
          </span>
          {ebook.originalPrice && (
            <span className="pb-1 text-base text-text-muted line-through">
              {ebook.originalPrice.toLocaleString()}원
            </span>
          )}
        </div>
      </div>

      <a
        href={ebook.purchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-3 block w-full rounded-full py-3.5 text-center text-base font-bold text-white transition-colors"
        style={{ backgroundColor: ebook.colors.primary }}
      >
        구매하기
      </a>

      {ebook.previewUrl && (
        <a
          href={ebook.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full border-2 py-3 text-center text-sm font-semibold transition-colors hover:bg-bg-secondary"
          style={{ borderColor: ebook.colors.primary, color: ebook.colors.primary }}
        >
          미리보기
        </a>
      )}

      <div className="mt-6 space-y-3 border-t border-border pt-6">
        <h3 className="text-sm font-bold text-text-primary">이 책의 특징</h3>
        {ebook.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="mt-0.5 text-secondary">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
