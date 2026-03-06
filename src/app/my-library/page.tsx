"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/lib/auth/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { getEbookBySlug } from "@/data/ebooks";
import { Ebook } from "@/types/ebook";
import Container from "@/components/layout/Container";

interface Purchase {
  id: string;
  ebook_slug: string;
  ebook_title: string;
  amount: number;
  purchased_at: string;
}

export default function MyLibraryPage() {
  const { user } = useAuth();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const supabase = createClient();
    if (!supabase) {
      setLoading(false);
      return;
    }

    supabase
      .from("purchases")
      .select("id, ebook_slug, ebook_title, amount, purchased_at")
      .eq("user_id", user.id)
      .eq("status", "paid")
      .order("purchased_at", { ascending: false })
      .then(({ data }) => {
        setPurchases(data ?? []);
        setLoading(false);
      });
  }, [user]);

  return (
    <Container className="py-12">
      <h1 className="mb-2 text-2xl font-bold text-text-primary">내 서재</h1>
      <p className="mb-8 text-sm text-text-muted">구매한 전자책을 다운로드할 수 있습니다.</p>

      {loading ? (
        <div className="py-20 text-center text-text-muted">불러오는 중...</div>
      ) : purchases.length === 0 ? (
        <div className="rounded-2xl border border-border bg-bg-primary py-20 text-center">
          <p className="mb-4 text-lg text-text-muted">아직 구매한 전자책이 없습니다.</p>
          <Link
            href="/ebook"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            전자책 둘러보기
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {purchases.map((purchase) => {
            const ebook: Ebook | undefined = getEbookBySlug(purchase.ebook_slug);
            return (
              <div
                key={purchase.id}
                className="rounded-2xl border border-border bg-bg-primary p-5 shadow-sm"
              >
                {/* 커버 */}
                <div
                  className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl"
                  style={{
                    background: ebook
                      ? `linear-gradient(135deg, ${ebook.colors.primary}, ${ebook.colors.secondary})`
                      : "#e2e8f0",
                  }}
                >
                  {ebook ? (
                    <>
                      <Image
                        src={ebook.coverImage}
                        alt={purchase.ebook_title}
                        fill
                        className={ebook.coverHasText ? "object-contain" : "object-cover"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {!ebook.coverHasText && (
                        <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/40 via-transparent to-black/50 p-2.5 pt-4">
                          <h3 className="text-sm font-extrabold leading-snug text-white drop-shadow-lg" style={{ wordBreak: "keep-all" }}>
                            {ebook.title}
                          </h3>
                          <div>
                            <p className="text-[10px] text-white/80 drop-shadow" style={{ wordBreak: "keep-all" }}>{ebook.subtitle}</p>
                            <p className="mt-1 text-[10px] text-white/60 drop-shadow">{ebook.author}</p>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="flex h-full items-center justify-center text-4xl">📖</span>
                  )}
                </div>

                <h2 className="mb-1 text-base font-bold text-text-primary">
                  {purchase.ebook_title}
                </h2>
                <p className="mb-4 text-xs text-text-muted">
                  {new Date(purchase.purchased_at).toLocaleDateString("ko-KR")} 구매
                </p>

                <a
                  href={`/api/download/${purchase.ebook_slug}`}
                  className="block w-full rounded-full py-2.5 text-center text-sm font-bold text-white transition-colors"
                  style={{ backgroundColor: ebook?.colors.primary ?? "#2C5F8D" }}
                >
                  PDF 다운로드
                </a>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
}
