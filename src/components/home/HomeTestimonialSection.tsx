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

export default function HomeTestimonialSection() {
  const shuffled = useMemo(() => shuffle(testimonials), []);
  // Duplicate for seamless infinite loop
  const items = useMemo(() => [...shuffled, ...shuffled], [shuffled]);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // px per frame

    const animate = () => {
      if (!paused) {
        position += speed;
        // Reset when first set is fully scrolled
        const halfWidth = track.scrollWidth / 2;
        if (position >= halfWidth) {
          position = 0;
        }
        track.style.transform = `translateX(-${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [paused]);

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
        <div ref={trackRef} className="flex gap-4 will-change-transform">
          {items.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
