import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "짱샘의 치유책방 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <h1 className="mb-8 text-3xl font-extrabold text-text-primary">
          개인정보처리방침
        </h1>

        <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
          <p>
            강남상회(이하 &quot;회사&quot;)는 「개인정보 보호법」에 따라 이용자의
            개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록
            다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">1. 수집하는 개인정보 항목</h2>
            <p className="mb-2">회사는 서비스 제공을 위해 다음의 개인정보를 수집합니다.</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>회원 가입 시</strong>: 이메일 주소, 비밀번호 (이메일 가입), 이메일 주소·이름·프로필 사진 (Google 소셜 로그인)</li>
              <li><strong>결제 시</strong>: 결제 수단 정보 (결제 대행사를 통해 처리되며 회사는 카드번호 등을 직접 저장하지 않습니다)</li>
              <li><strong>뉴스레터 구독 시</strong>: 이메일 주소</li>
              <li><strong>서비스 이용 과정에서 자동 생성</strong>: 접속 IP, 방문 일시, 브라우저 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">2. 개인정보의 수집·이용 목적</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>회원 관리: 회원 가입, 본인 확인, 서비스 부정 이용 방지</li>
              <li>서비스 제공: 디지털 콘텐츠 구매·다운로드, 구매 내역 관리</li>
              <li>결제 처리: 유료 콘텐츠 결제 및 환불 처리</li>
              <li>마케팅: 신간 안내, 이벤트 정보 발송 (뉴스레터 구독자에 한함)</li>
              <li>서비스 개선: 이용 통계 분석, 서비스 품질 향상</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">3. 개인정보의 보유 및 이용 기간</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>회원 탈퇴 시 즉시 파기 (단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 보관)</li>
              <li>전자상거래 등에서의 소비자 보호에 관한 법률에 따른 보관
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>계약 또는 청약 철회 등에 관한 기록: 5년</li>
                  <li>대금 결제 및 재화 등의 공급에 관한 기록: 5년</li>
                  <li>소비자의 불만 또는 분쟁 처리에 관한 기록: 3년</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">4. 개인정보의 제3자 제공</h2>
            <p>
              회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
              다만, 법령에 의해 요구되는 경우는 예외로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">5. 개인정보 처리 위탁</h2>
            <p className="mb-2">회사는 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁합니다.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="border-b border-border bg-bg-secondary">
                    <th className="p-2 text-left font-semibold">수탁 업체</th>
                    <th className="p-2 text-left font-semibold">위탁 업무</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-light">
                    <td className="p-2">토스페이먼츠(주)</td>
                    <td className="p-2">결제 처리</td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="p-2">Supabase Inc.</td>
                    <td className="p-2">회원 인증 및 데이터 저장</td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="p-2">Resend Inc.</td>
                    <td className="p-2">이메일 발송</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">6. 이용자의 권리와 행사 방법</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>이용자는 언제든지 자신의 개인정보에 대해 열람, 수정, 삭제, 처리 정지를 요청할 수 있습니다.</li>
              <li>뉴스레터 수신 거부는 이메일 하단의 구독 해지 링크를 통해 가능합니다.</li>
              <li>위 요청은 이메일(junominu@gmail.com)로 연락해 주시기 바랍니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">7. 개인정보의 파기 절차 및 방법</h2>
            <p>
              이용 목적이 달성된 개인정보는 지체 없이 파기합니다.
              전자적 파일 형태의 정보는 복구할 수 없는 방법으로 삭제하며,
              종이 문서는 분쇄기로 파쇄합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">8. 개인정보 보호책임자</h2>
            <ul className="list-none space-y-1">
              <li>성명: 하성재</li>
              <li>이메일: junominu@gmail.com</li>
              <li>전화: 010-5776-3325</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-text-primary">9. 개인정보처리방침의 변경</h2>
            <p>
              이 개인정보처리방침은 법령, 정책 또는 보안 기술의 변경에 따라
              내용이 추가·삭제·수정될 수 있으며, 변경 시 사이트를 통해 공지합니다.
            </p>
          </section>

          <section className="rounded-lg bg-bg-secondary p-4">
            <p className="text-xs text-text-muted">
              본 개인정보처리방침은 2026년 3월 7일부터 시행됩니다.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
