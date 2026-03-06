import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "이용약관",
  description: "짱샘의 치유책방 이용약관",
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <h1 className="mb-8 text-3xl font-extrabold text-text-primary">
          이용약관
        </h1>

        <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">제1조 (목적)</h2>
            <p>
              이 약관은 강남상회(이하 &quot;회사&quot;)가 운영하는 &quot;짱샘의 치유책방&quot;
              (이하 &quot;사이트&quot;)에서 제공하는 디지털 콘텐츠 판매 및 관련 서비스의
              이용 조건과 절차, 회사와 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">제2조 (정의)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>&quot;사이트&quot;란 회사가 디지털 콘텐츠를 이용자에게 제공하기 위하여 운영하는 인터넷 웹사이트를 말합니다.</li>
              <li>&quot;이용자&quot;란 사이트에 접속하여 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
              <li>&quot;회원&quot;이란 사이트에 개인정보를 제공하여 회원 등록을 한 자로서, 사이트의 서비스를 이용할 수 있는 자를 말합니다.</li>
              <li>&quot;디지털 콘텐츠&quot;란 전자책(PDF) 등 전자적 형태로 제공되는 유료 콘텐츠를 말합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">제3조 (약관의 효력 및 변경)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>이 약관은 사이트에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
              <li>회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경된 약관은 사이트에 공지한 날로부터 7일 후에 효력이 발생합니다.</li>
              <li>이용자가 변경된 약관에 동의하지 않는 경우, 이용자는 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">제4조 (회원 가입 및 관리)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>이용자는 사이트가 정한 절차에 따라 회원 가입을 신청하며, 회사는 이를 승낙함으로써 회원 가입이 완료됩니다.</li>
              <li>회원은 가입 시 등록한 정보에 변경이 생긴 경우, 즉시 수정해야 합니다.</li>
              <li>회원은 자신의 계정 정보를 타인에게 양도하거나 공유할 수 없습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">제5조 (서비스의 제공)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회사는 디지털 콘텐츠(전자책 PDF) 판매 및 다운로드 서비스를 제공합니다.</li>
              <li>구매한 디지털 콘텐츠는 결제 완료 후 즉시 다운로드가 가능합니다.</li>
              <li>회사는 서비스의 안정적 제공을 위해 노력하며, 시스템 점검 등 불가피한 경우 사전 공지 후 서비스를 일시 중단할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">제6조 (결제)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>디지털 콘텐츠의 가격은 사이트에 표시된 금액을 기준으로 합니다.</li>
              <li>결제는 신용카드, 간편결제 등 회사가 제공하는 결제 수단을 통해 이루어집니다.</li>
              <li>결제 완료 후 구매 내역은 &quot;내 서재&quot;에서 확인할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">제7조 (저작권 및 이용 제한)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>사이트에서 제공하는 모든 디지털 콘텐츠의 저작권은 회사 또는 원저작자에게 있습니다.</li>
              <li>이용자는 구매한 콘텐츠를 개인적 용도로만 사용할 수 있으며, 무단 복제·배포·전송·공연·방송 등의 행위를 할 수 없습니다.</li>
              <li>이를 위반할 경우 관련 법령에 따라 민·형사상 책임을 질 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">제8조 (면책 조항)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회사는 천재지변 또는 이에 준하는 불가항력으로 서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.</li>
              <li>회사는 이용자의 귀책 사유로 인한 서비스 이용 장애에 대해서는 책임을 지지 않습니다.</li>
              <li>디지털 콘텐츠의 내용은 참고 자료이며, 전문 의료 상담을 대체하지 않습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">제9조 (분쟁 해결)</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>회사와 이용자 사이에 발생한 분쟁에 관한 소송은 대한민국 법률을 적용합니다.</li>
              <li>서비스 이용과 관련하여 분쟁이 발생한 경우 회사의 소재지를 관할하는 법원을 관할 법원으로 합니다.</li>
            </ol>
          </section>

          <section className="rounded-lg bg-bg-secondary p-4">
            <p className="text-xs text-text-muted">
              본 약관은 2026년 3월 7일부터 시행됩니다.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
