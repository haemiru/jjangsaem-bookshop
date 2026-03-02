"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import { useAuth } from "@/lib/auth/AuthProvider";
import Container from "./Container";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, loading, signOut, remainingSeconds } = useAuth();

  const formatTime = (s: number | null) => {
    if (s === null) return "";
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Main header */}
      <div className="border-b border-gray-200">
        <Container className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <span className="text-xl">📖</span>
            <span>짱샘의 치유책방</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-gray-600 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            {/* Auth buttons */}
            {!loading && (
              <>
                {user ? (
                  <div className="flex items-center gap-3">
                    <Link
                      href="/my-library"
                      className="text-[13px] font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      내 서재
                    </Link>
                    {remainingSeconds !== null && (
                      <span className={`text-[11px] font-mono tabular-nums ${remainingSeconds <= 60 ? "text-red-500" : "text-text-muted"}`}>
                        {formatTime(remainingSeconds)}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={signOut}
                      className="rounded-lg border border-border px-3 py-1.5 text-[12px] font-medium text-text-muted transition-colors hover:bg-bg-secondary"
                    >
                      로그아웃
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/auth"
                    className="rounded-lg bg-primary px-4 py-1.5 text-[12px] font-bold text-white transition-colors hover:bg-primary-dark"
                  >
                    로그인
                  </Link>
                )}
              </>
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="touch-target flex items-center justify-center md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </Container>
      </div>

      {/* Sub navigation bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <Container>
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/ebook"
              className="rounded-md px-3 py-2 text-[13px] font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              전자책
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/blog"
              className="rounded-md px-3 py-2 text-[13px] text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              블로그
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-[13px] text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              짱샘 소개
            </Link>
          </div>
        </Container>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
