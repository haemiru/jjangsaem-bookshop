"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  accentColor: string;
}

export default function TestimonialCarousel({
  testimonials,
  accentColor,
}: TestimonialCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = testimonials.length;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    if (!card) return;
    const gap = 16;
    const offset = currentIndex * (card.offsetWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex]);

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

        {/* Track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-500 ease-in-out"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[320px] flex-shrink-0 rounded-2xl border border-border bg-bg-primary p-6 sm:w-[380px]"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-secondary">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-muted">{t.role}</p>
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
