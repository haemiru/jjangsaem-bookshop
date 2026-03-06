"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
    <div className="w-[320px] flex-shrink-0 rounded-2xl border border-border bg-bg-primary p-5 sm:w-[360px]">
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
      <p className="mb-3 text-sm leading-relaxed text-text-secondary">
        &ldquo;{t.content}&rdquo;
      </p>
      <div>
        <p className="text-sm font-semibold text-text-primary">{t.name}</p>
        <p className="text-xs text-text-muted">{t.role}</p>
      </div>
    </div>
  );
}

const STEP = 2; // 한 번에 넘기는 카드 수
const INTERVAL = 4000; // ms

export default function HomeTestimonialSection() {
  const shuffled = useMemo(() => shuffle(testimonials), []);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, shuffled.length - STEP);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + STEP > maxIndex ? 0 : prev + STEP));
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, maxIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const card = track.children[0] as HTMLElement;
    const gap = 16;
    const offset = currentIndex * (card.offsetWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex]);

  return (
    <section className="bg-bg-warm py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="독자 후기"
          subtitle="짱샘의 전자책을 먼저 읽은 분들의 이야기"
        />
      </Container>
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div ref={trackRef} className="flex gap-4 transition-transform duration-700 ease-in-out will-change-transform">
          {shuffled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
