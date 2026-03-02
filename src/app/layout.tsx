import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "짱샘의 책방 — 감각 치유 전문 전자책",
    template: "%s | 짱샘의 책방",
  },
  description:
    "발달장애 아동의 후각 훈련, 수면 개선, 부모 내면 치유까지. 현장 전문가가 만든 감각 기반 치유 전자책, 짱샘의 책방입니다.",
  keywords: ["후각 훈련", "발달장애 수면", "감각 치유", "부모 치유", "짱샘의 책방"],
  authors: [{ name: "짱샘" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "짱샘의 책방",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
