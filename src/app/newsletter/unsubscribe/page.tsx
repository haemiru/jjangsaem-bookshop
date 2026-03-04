"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const isSuccess = status === "success";

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-warm)] px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <div className="text-5xl mb-6">{isSuccess ? "✉️" : "⚠️"}</div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
          {isSuccess ? "구독이 해지되었습니다" : "구독 해지에 실패했습니다"}
        </h1>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
          {isSuccess
            ? "짱샘의 치유책방 뉴스레터 구독이 정상적으로 해지되었습니다. 다시 만날 날을 기대하겠습니다."
            : "구독 해지 처리 중 문제가 발생했습니다. 잠시 후 다시 시도하시거나, jjangsaem.bookshop@gmail.com으로 문의해주세요."}
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[var(--primary)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-[var(--bg-warm)]">
          <div className="text-[var(--text-secondary)]">처리 중...</div>
        </main>
      }
    >
      <UnsubscribeContent />
    </Suspense>
  );
}
