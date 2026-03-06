import Link from "next/link";
import Container from "./Container";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#1a1a2e] text-gray-300">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-white">
              짱샘의 치유책방
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              발달장애 아동과 가족을 위한
              <br />
              감각 기반 치유 전자책을 만듭니다.
            </p>
            {/* SNS */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/seochojiye"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="인스타그램"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://blog.naver.com/imoim77"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="네이버 블로그"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="카카오톡 채널 (준비 중)"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                title="카카오톡 채널 준비 중"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.72 1.794 5.11 4.504 6.458-.199.744-.72 2.696-.826 3.112-.13.516.19.51.398.371.164-.109 2.609-1.77 3.668-2.49.737.11 1.49.167 2.256.167 5.523 0 10-3.463 10-7.618C22 6.463 17.523 3 12 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ebook" className="text-sm text-gray-400 transition-colors hover:text-white">
                  전자책
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 transition-colors hover:text-white">
                  블로그
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 transition-colors hover:text-white">
                  소개
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-gray-400 transition-colors hover:text-white">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 transition-colors hover:text-white">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 transition-colors hover:text-white">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-gray-400 transition-colors hover:text-white">
                  환불 규정
                </Link>
              </li>
            </ul>
          </div>

          {/* 소식 받기 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">소식 받기</h3>
            <p className="mb-3 text-sm text-gray-400">
              새 전자책 출간과 유용한 팁을 받아보세요.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* 사업자 정보 */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="text-xs leading-relaxed text-gray-500">
            <p>
              상호: 강남상회 | 대표: 하성재 | 사업자등록번호: 893-19-02019{" "}
              <a
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8931902019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                [사업자 확인]
              </a>
            </p>
            <p>
              통신판매업 신고번호: 제2025-충북청주-1318호 | 주소: 충청북도 청주시 흥덕구 진재로41, 3층 A220호
            </p>
            <p>
              이메일:{" "}
              <a href="mailto:junominu@gmail.com" className="text-gray-400 hover:text-white">
                junominu@gmail.com
              </a>{" "}
              | 전화: 010-5776-3325
            </p>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} 짱샘의 치유책방. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
