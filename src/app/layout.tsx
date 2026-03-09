import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/lib/auth/AuthProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "짱샘의 치유책방 — 감각 치유 전문 전자책",
    template: "%s | 짱샘의 치유책방",
  },
  description:
    "발달장애 아동의 후각 훈련, 수면 개선, 부모 내면 치유까지. 현장 전문가가 만든 감각 기반 치유 전자책, 짱샘의 치유책방입니다.",
  keywords: ["후각 훈련", "발달장애 수면", "감각 치유", "부모 치유", "짱샘의 치유책방"],
  authors: [{ name: "짱샘" }],
  verification: {
    google: "grPT7FtDJ5QHFxynPRUzbmAy4ZEoR3XvnODcnEPZY-o",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "짱샘의 치유책방",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col antialiased">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </AuthProvider>
      </body>
    </html>
  );
}
