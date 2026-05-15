"use client";

import Image from "next/image";
import Eyebrow from "./ui/Eyebrow";

export default function AboutBanner() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/AboutBanner.jpg" 
        alt="About Retreat"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 to-black/20 z-10" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16">

        <div className="max-w-2xl space-y-6 text-white">

          <div>
            <Eyebrow variant="light">About our retreats</Eyebrow>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            A Space for <br /> <em>Inner Transformation</em>
          </h1>

          <p className="text-white/80 max-w-md">
            We create immersive retreat experiences that help you reconnect 
            with yourself, find clarity, and experience deep transformation 
            through mindfulness and conscious living.
          </p>

        </div>

      </div>

    </section>
  );
}