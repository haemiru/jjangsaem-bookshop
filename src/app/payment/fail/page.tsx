"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Container from "@/components/layout/Container";

function PaymentFailContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const message = searchParams.get("message");

  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-12">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-text-primary">결제에 실패했습니다</h1>
        {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
        {code && <p className="mt-1 text-xs text-text-muted">오류 코드: {code}</p>}
        <Link
          href="/ebook"
          className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
        >
          전자책 목록으로
        </Link>
      </div>
    </Container>
  );
}

export default function PaymentFailPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-text-muted">로딩 중...</div>}>
      <PaymentFailContent />
    </Suspense>
  );
}
