"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** High-quality Unsplash produce photos (fruits & vegetables). */
const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=1200&q=80",
    alt: "Tomates maduros en la planta",
  },
  {
    src: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=1200&q=80",
    alt: "Fresas frescas",
  },
  {
    src: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=1200&q=80",
    alt: "Lechugas verdes",
  },
  {
    src: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=1200&q=80",
    alt: "Pimientos de colores",
  },
  {
    src: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=1200&q=80",
    alt: "Limones frescos",
  },
  {
    src: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1200&q=80",
    alt: "Hierbas aromáticas frescas (albahaca y otras)",
  },
  {
    src: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=1200&q=80",
    alt: "Calabacín fresco",
  },
  {
    src: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1200&q=80",
    alt: "Manzanas rojas",
  },
  {
    src: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=1200&q=80",
    alt: "Zanahorias del huerto",
  },
  {
    src: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&q=80",
    alt: "Frutas de temporada",
  },
] as const;

const INTERVAL_MS = 1500;
const FADE_MS = 700;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="relative h-[280px] w-full overflow-hidden rounded-2xl shadow-md shadow-brand-900/10 ring-1 ring-brand-900/5 sm:h-[360px] lg:h-[400px]"
      role="img"
      aria-label={SLIDES[index].alt}
    >
      {SLIDES.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: active ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
              zIndex: active ? 1 : 0,
            }}
            aria-hidden={!active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        );
      })}

      {/* Soft green tint at edges for brand cohesion */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] rounded-2xl ring-1 ring-inset ring-brand-900/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-16 bg-gradient-to-t from-brand-950/20 to-transparent"
      />
    </div>
  );
}
