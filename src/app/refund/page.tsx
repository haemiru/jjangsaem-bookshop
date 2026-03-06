import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "환불 규정",
  description: "짱샘의 치유책방 환불 규정. 디지털 콘텐츠 환불 정책을 안내합니다.",
};

export default function RefundPage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <h1 className="mb-8 text-3xl font-extrabold text-text-primary">
          환불 규정
        </h1>

        <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
          <section className="rounded-xl border border-secondary/30 bg-secondary/5 p-5">
            <p className="font-medium text-text-primary">
              짱샘의 치유책방은 디지털 콘텐츠(전자책 PDF)를 판매합니다.
              「전자상거래 등에서의 소비자보호에 관한 법률」 및 「콘텐츠산업 진흥법」에 따라
              아래와 같은 환불 정책을 운영합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">1. 환불이 가능한 경우</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>구매 후 다운로드 전</strong>: 결제 완료 후 콘텐츠를 다운로드하지 않은 경우,
                구매일로부터 7일 이내에 전액 환불이 가능합니다.
              </li>
              <li>
                <strong>콘텐츠 하자</strong>: 파일이 손상되었거나, 내용이 상품 설명과 현저히 다른 경우
                환불을 요청할 수 있습니다.
              </li>
              <li>
                <strong>중복 결제</strong>: 동일한 상품이 중복 결제된 경우 즉시 환불 처리됩니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">2. 환불이 어려운 경우</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>다운로드 완료 후</strong>: 디지털 콘텐츠의 특성상, 콘텐츠를 다운로드한 이후에는
                환불이 불가합니다. (「콘텐츠산업 진흥법」 제27조에 따른 청약 철회 제한)
              </li>
              <li>
                <strong>구매 후 7일 경과</strong>: 다운로드 여부와 관계없이 구매일로부터 7일이
                경과한 경우 환불이 어렵습니다.
              </li>
              <li>
                <strong>이용자의 단순 변심</strong>: 콘텐츠를 이미 열람(다운로드)한 후의 단순 변심으로
                인한 환불은 불가합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">3. 환불 절차</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>아래 연락처로 환불을 요청합니다.</li>
              <li>담당자가 구매 내역과 다운로드 여부를 확인합니다.</li>
              <li>환불 승인 후 영업일 기준 3~5일 이내에 결제 수단으로 환불 처리됩니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">4. 환불 요청 연락처</h2>
            <div className="rounded-lg bg-bg-secondary p-4">
              <ul className="list-none space-y-1">
                <li>이메일: <a href="mailto:junominu@gmail.com" className="text-primary hover:underline">junominu@gmail.com</a></li>
                <li>전화: 010-5776-3325</li>
              </ul>
              <p className="mt-2 text-xs text-text-muted">
                영업시간: 평일 10:00~18:00 (공휴일 제외)
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">5. 기타</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                환불 처리 시 결제 수수료가 발생한 경우, 수수료를 차감한 금액이 환불될 수 있습니다.
              </li>
              <li>
                기타 분쟁이 발생한 경우 「전자상거래 등에서의 소비자보호에 관한 법률」 및
                관련 법령에 따릅니다.
              </li>
            </ul>
          </section>

          <section className="rounded-lg bg-bg-secondary p-4">
            <p className="text-xs text-text-muted">
              본 환불 규정은 2026년 3월 7일부터 시행됩니다.
            </p>
          </section>

          <div className="pt-4 text-center">
            <Link
              href="/faq"
              className="text-sm text-primary hover:underline"
            >
              자주 묻는 질문(FAQ) 보기 &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
