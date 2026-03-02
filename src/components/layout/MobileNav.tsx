"use client";

import Link from "next/link";
import { useEffect } from "react";
import { navItems } from "@/data/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-72 bg-bg-primary p-6 shadow-xl">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">📖 짱샘의 책방</span>
          <button
            type="button"
            onClick={onClose}
            className="touch-target flex items-center justify-center"
            aria-label="메뉴 닫기"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/ebook"
            onClick={onClose}
            className="mt-4 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            전자책 보기
          </Link>
        </nav>
      </div>
    </div>
  );
}
