"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Testimonial } from "@/data/testimonials";

const VISIBLE = 3;
const GAP = 16;

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  accentColor: string;
}

export default function TestimonialCarousel({
  testimonials,
  accentColor,
}: TestimonialCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const total = testimonials.length;
  const maxIndex = Math.max(0, total - VISIBLE);

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
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  useEffect(() => {
    if (!trackRef.current || cardWidth === 0) return;
    const offset = currentIndex * (cardWidth + GAP);
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex, cardWidth]);

  if (total === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-xl font-bold text-text-primary">독자 후기</h2>
      <div
        className="group relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Left arrow */}
        <button
          onClick={goPrev}
          aria-label="이전 후기"
          className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10 p-2 text-gray-600 backdrop-blur-sm transition-all hover:bg-black/20 hover:text-gray-900 sm:p-3"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Viewport — ref here for width calculation */}
        <div ref={viewportRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ gap: `${GAP}px` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: cardWidth || "auto" }}
              >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-bg-primary p-6">
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-secondary">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {t.name}
                    </p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={goNext}
          aria-label="다음 후기"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-black/10 p-2 text-gray-600 backdrop-blur-sm transition-all hover:bg-black/20 hover:text-gray-900 sm:p-3"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="h-2 w-2 rounded-full transition-colors"
            style={{
              backgroundColor: i === currentIndex ? accentColor : "#e2e8f0",
            }}
            aria-label={`후기 ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
