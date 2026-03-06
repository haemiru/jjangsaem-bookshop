"use client";

import { useEffect, useRef, useState } from "react";
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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);

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
