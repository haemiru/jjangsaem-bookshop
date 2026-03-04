import Link from "next/link";
import Container from "./Container";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-primary">
              📖 짱샘의 치유책방
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              발달장애 아동과 가족을 위한
              <br />
              감각 기반 치유 전자책을 만듭니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ebook" className="text-sm text-text-muted hover:text-primary">
                  전자책
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-text-muted hover:text-primary">
                  블로그
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-text-muted hover:text-primary">
                  소개
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter placeholder */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">소식 받기</h3>
            <p className="mb-3 text-sm text-text-muted">
              새 전자책 출간과 유용한 팁을 받아보세요.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} 짱샘의 치유책방. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
