"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { testimonials, Testimonial } from "@/data/testimonials";
import { getEbookBySlug } from "@/data/ebooks";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const ebook = getEbookBySlug(t.bookSlug);
  const bookTitle = ebook?.title ?? "";

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-bg-primary p-5">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, j) => (
            <span key={j} className="text-sm text-secondary">
              ★
            </span>
          ))}
        </div>
        {bookTitle && (
          <span className="max-w-[140px] truncate text-xs text-text-muted">
            {bookTitle}
          </span>
        )}
      </div>
      <p className="mb-3 flex-1 text-sm leading-relaxed text-text-secondary">
        &ldquo;{t.content}&rdquo;
      </p>
      <div>
        <p className="text-sm font-semibold text-text-primary">{t.name}</p>
        <p className="text-xs text-text-muted">{t.role}</p>
      </div>
    </div>
  );
}

const VISIBLE = 3;
const STEP = 2;
const GAP = 16;
const INTERVAL = 4000;

export default function HomeTestimonialSection() {
  const shuffled = useMemo(() => shuffle(testimonials), []);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const maxIndex = Math.max(0, shuffled.length - VISIBLE);
useEffect(() => {
    const update = () => {
      if (!viewportRef.current) return;
      const w = viewportRef.current.offsetWidth;
      setCardWidth((w - GAP * (VISIBLE - 1)) / VISIBLE);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + STEP > maxIndex ? 0 : prev + STEP));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - STEP < 0 ? maxIndex : prev - STEP));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  useEffect(() => {
    if (!trackRef.current || cardWidth === 0) return;
    const offset = currentIndex * (cardWidth + GAP);
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex, cardWidth]);

  return (
    <section className="bg-bg-warm py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="독자 후기"
          subtitle="짱샘의 전자책을 먼저 읽은 분들의 이야기"
        />
      </Container>
      <div
        className="group relative mx-auto max-w-6xl px-10 sm:px-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Left arrow */}
        <button
          onClick={goPrev}
          aria-label="이전 후기"
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/10 p-2 text-gray-600 backdrop-blur-sm transition-all hover:bg-black/20 hover:text-gray-900 sm:left-2 sm:p-3"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Viewport */}
        <div ref={viewportRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-in-out will-change-transform"
            style={{ gap: `${GAP}px` }}
          >
            {shuffled.map((t, i) => (
              <div key={i} className="flex-shrink-0" style={{ width: cardWidth || "auto" }}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={goNext}
          aria-label="다음 후기"
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/10 p-2 text-gray-600 backdrop-blur-sm transition-all hover:bg-black/20 hover:text-gray-900 sm:right-2 sm:p-3"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
}
