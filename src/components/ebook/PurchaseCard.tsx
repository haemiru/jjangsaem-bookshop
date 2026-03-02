"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { Ebook } from "@/types/ebook";

interface PurchaseCardProps {
  ebook: Ebook;
}

export default function PurchaseCard({ ebook }: PurchaseCardProps) {
  const { user, loading: authLoading } = useAuth();
  const [purchased, setPurchased] = useState(false);
  const [checkingPurchase, setCheckingPurchase] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const discount = ebook.originalPrice
    ? Math.round((1 - ebook.price / ebook.originalPrice) * 100)
    : 0;

  // 구매 여부 확인
  useEffect(() => {
    if (!user) {
      setPurchased(false);
      return;
    }

    const supabase = createClient();
    if (!supabase) return;

    setCheckingPurchase(true);
    supabase
      .from("purchases")
      .select("id")
      .eq("user_id", user.id)
      .eq("ebook_slug", ebook.slug)
      .eq("status", "paid")
      .limit(1)
      .then(({ data }) => {
        setPurchased(!!data && data.length > 0);
        setCheckingPurchase(false);
      });
  }, [user, ebook.slug]);

  const handlePurchase = async () => {
    if (!user) {
      router.push(`/auth?next=/ebook/${ebook.slug}`);
      return;
    }

    setPaymentLoading(true);
    setError("");
    try {
      const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
      if (!clientKey) {
        setError("결제 설정이 완료되지 않았습니다. 관리자에게 문의해 주세요.");
        setPaymentLoading(false);
        return;
      }

      // Toss V1 스크립트 로드
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const TossPayments = await new Promise<any>((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).TossPayments) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          resolve((window as any).TossPayments);
          return;
        }
        const script = document.createElement("script");
        script.src = "https://js.tosspayments.com/v1/payment";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        script.onload = () => resolve((window as any).TossPayments);
        script.onerror = () => reject(new Error("결제 모듈을 불러올 수 없습니다."));
        document.head.appendChild(script);
      });

      const { v4: uuidv4 } = await import("uuid");
      const tossPayments = TossPayments(clientKey);
      const orderId = uuidv4();

      await tossPayments.requestPayment("카드", {
        amount: ebook.price,
        orderId,
        orderName: ebook.title,
        customerName: user.email?.split("@")[0] ?? "고객",
        customerEmail: user.email ?? undefined,
        successUrl: `${window.location.origin}/payment/success?slug=${ebook.slug}`,
        failUrl: `${window.location.origin}/payment/fail`,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "결제 처리 중 오류가 발생했습니다.";
      setError(message);
      console.error("결제 오류:", err);
    } finally {
      setPaymentLoading(false);
    }
  };

  const isLoading = authLoading || checkingPurchase;

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

      {purchased ? (
        <button
          type="button"
          onClick={() => router.push("/my-library")}
          className="mb-3 block w-full rounded-full bg-green-600 py-3.5 text-center text-base font-bold text-white transition-colors hover:bg-green-700"
        >
          내 서재에서 다운로드
        </button>
      ) : (
        <button
          type="button"
          onClick={handlePurchase}
          disabled={isLoading || paymentLoading}
          className="mb-3 block w-full rounded-full py-3.5 text-center text-base font-bold text-white transition-colors disabled:opacity-50"
          style={{ backgroundColor: ebook.colors.primary }}
        >
          {paymentLoading ? "결제 진행 중..." : isLoading ? "확인 중..." : "구매하기"}
        </button>
      )}

      {error && (
        <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      )}

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
