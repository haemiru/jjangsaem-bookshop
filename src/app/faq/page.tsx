import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import FaqAccordion from "@/components/shared/FaqAccordion";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description: "짱샘의 치유책방에서 자주 묻는 질문과 답변을 확인하세요.",
};

const faqs = [
  {
    question: "전자책은 어떤 형식으로 제공되나요?",
    answer:
      "모든 전자책은 PDF 파일로 제공됩니다. 컴퓨터, 태블릿, 스마트폰 등 PDF를 지원하는 모든 기기에서 읽을 수 있습니다.",
  },
  {
    question: "결제 후 바로 다운로드할 수 있나요?",
    answer:
      "네, 결제가 완료되면 즉시 '내 서재'에서 다운로드하실 수 있습니다. 별도의 배송 대기 시간이 없습니다.",
  },
  {
    question: "다운로드 횟수에 제한이 있나요?",
    answer:
      "구매한 전자책은 '내 서재'에서 언제든지 다시 다운로드하실 수 있습니다. 횟수 제한은 없습니다.",
  },
  {
    question: "환불은 어떻게 하나요?",
    answer:
      "다운로드 전이라면 구매일로부터 7일 이내에 환불이 가능합니다. 다운로드 후에는 디지털 콘텐츠 특성상 환불이 어렵습니다. 자세한 내용은 환불 규정 페이지를 참고해 주세요.",
  },
  {
    question: "회원 가입 없이도 구매할 수 있나요?",
    answer:
      "전자책 구매와 다운로드를 위해서는 회원 가입이 필요합니다. 이메일 또는 Google 계정으로 간편하게 가입할 수 있습니다.",
  },
  {
    question: "전자책을 인쇄해서 사용해도 되나요?",
    answer:
      "개인 용도로 인쇄하여 사용하시는 것은 가능합니다. 다만 상업적 목적으로 복제·배포하는 것은 저작권법에 의해 금지됩니다.",
  },
  {
    question: "전자책 내용에 대해 질문이 있으면 어디로 문의하나요?",
    answer:
      "이메일(junominu@gmail.com)로 문의해 주시면 확인 후 답변드리겠습니다.",
  },
  {
    question: "뉴스레터 구독은 무료인가요?",
    answer:
      "네, 뉴스레터 구독은 무료입니다. 새 전자책 출간 소식과 유용한 육아·치유 정보를 받아보실 수 있으며, 언제든 구독 해지가 가능합니다.",
  },
  {
    question: "전자책에 포함된 프로그램을 우리 아이에게 바로 적용해도 되나요?",
    answer:
      "전자책은 전문 지식을 바탕으로 작성되었지만, 아이의 개별 상황에 따라 적용 방법이 다를 수 있습니다. 중요한 결정은 담당 치료사나 전문의와 상의하시길 권합니다.",
  },
  {
    question: "결제 수단은 어떤 것이 있나요?",
    answer:
      "현재 토스페이먼츠를 통해 신용카드, 체크카드, 간편결제(카카오페이, 네이버페이, 토스페이 등)로 결제하실 수 있습니다.",
  },
];

export default function FaqPage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <h1 className="mb-2 text-3xl font-extrabold text-text-primary">
          자주 묻는 질문
        </h1>
        <p className="mb-8 text-text-muted">
          궁금한 점이 해결되지 않으셨다면{" "}
          <a href="mailto:junominu@gmail.com" className="text-primary hover:underline">
            이메일로 문의
          </a>
          해 주세요.
        </p>

        <FaqAccordion faqs={faqs} />

        <div className="mt-10 flex justify-center gap-4 text-sm">
          <Link href="/refund" className="text-primary hover:underline">
            환불 규정 보기 &rarr;
          </Link>
          <Link href="/terms" className="text-text-muted hover:text-primary">
            이용약관
          </Link>
          <Link href="/privacy" className="text-text-muted hover:text-primary">
            개인정보처리방침
          </Link>
        </div>
      </Container>
    </div>
  );
}
