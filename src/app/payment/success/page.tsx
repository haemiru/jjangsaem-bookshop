"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getEbookBySlug } from "@/data/ebooks";
import Container from "@/components/layout/Container";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState("");

  const paymentKey = searchParams.get("paymentKey");
  const orderId = searchParams.get("orderId");
  const amount = Number(searchParams.get("amount"));
  const slug = searchParams.get("slug");

  const ebook = slug ? getEbookBySlug(slug) : null;

  useEffect(() => {
    if (!paymentKey || !orderId || !amount || !slug) {
      setStatus("error");
      setErrorMessage("결제 정보가 올바르지 않습니다.");
      return;
    }

    fetch("/api/payment/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentKey, orderId, amount, slug }),
    })
      .then(async (res) => {
        if (res.ok) {
          setStatus("success");
        } else {
          const data = await res.json();
          setStatus("error");
          setErrorMessage(data.error || "결제 승인에 실패했습니다.");
        }
      })
      .catch(() => {
        setStatus("error");
        setErrorMessage("서버 연결에 실패했습니다.");
      });
  }, [paymentKey, orderId, amount, slug]);

  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-12">
      <div className="w-full max-w-md text-center">
        {status === "loading" && (
          <>
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <h1 className="text-xl font-bold text-text-primary">결제 확인 중...</h1>
            <p className="mt-2 text-sm text-text-muted">잠시만 기다려 주세요.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-text-primary">결제가 완료되었습니다!</h1>
            {ebook && (
              <p className="mt-2 text-sm text-text-muted">
                &ldquo;{ebook.title}&rdquo; 구매가 완료되었습니다.
              </p>
            )}
            <button
              type="button"
              onClick={() => router.push("/my-library")}
              className="mt-6 rounded-full bg-primary px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
            >
              내 서재로 이동
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-text-primary">결제 승인 실패</h1>
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
            <button
              type="button"
              onClick={() => router.back()}
              className="mt-6 rounded-full border-2 border-border px-8 py-3 text-sm font-bold text-text-primary transition-colors hover:bg-bg-secondary"
            >
              돌아가기
            </button>
          </>
        )}
      </div>
    </Container>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-text-muted">로딩 중...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
