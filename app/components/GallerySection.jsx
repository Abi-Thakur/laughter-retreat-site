"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function GallerySlider({ images }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const totalWidth = slider.scrollWidth / 2;

    const tween = gsap.to(slider, {
      x: -totalWidth,
      duration: 45, // slower = premium
      ease: "none",
      repeat: -1,
    });

    // Pause on hover (nice UX)
    slider.addEventListener("mouseenter", () => tween.pause());
    slider.addEventListener("mouseleave", () => tween.resume());

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="relative py-12 md:py-24 bg-(--primary-color) overflow-hidden">

      {/* HEADER */}
      <div className="px-6 md:px-16 mb-12 max-w-xl">
        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
          Retreat Gallery
        </h2>
        <p className="text-white/70 mt-3 text-sm md:text-base">
          Moments of stillness, connection, and transformation.
        </p>
      </div>

      {/* EDGE FADE (premium look) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-[var(--primary-color)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-[var(--primary-color)] to-transparent z-10" />

      {/* SLIDER */}
      <div className="overflow-hidden -mt-6 md:-mt-10">
        <div ref={sliderRef} className="flex w-max">

          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="relative w-[28vw] min-w-[260px] h-[220px] md:h-[380px] overflow-hidden group"
            >
              {/* IMAGE */}
              <Image
                src={img}
                alt="gallery"
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition duration-500" />

              {/* DIVIDER LINE */}
              <div className="absolute right-0 top-0 h-full w-px bg-white/10" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}