'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "./ui/Button";

export default function Hero() {
  const containerRef = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(".eyebrow", {
      y: 15,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
    })
      .from(".hero-heading", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.4")
      .from(".hero-text", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")
      .from(".hero-buttons", {
        y: 15,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=0.5");

  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
  src="https://res.cloudinary.com/dryf1gq9e/video/upload/f_auto,q_auto/banner_image_1_1_izcl9r.mp4"
  type="video/mp4"
/>
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0b1f17]/85 via-[#0b1f17]/40 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="px-6 md:px-16 max-w-xl text-white">

          {/* Eyebrow */}
          <div className="eyebrow flex items-center gap-2 mb-4">
            <span className="h-px w-6 bg-white/40"></span>
            <span className="px-2.5 py-1 text-xs tracking-widest uppercase rounded-md bg-white/5 backdrop-blur-md border border-white/10 text-white/80">
              Global Retreats
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading text-4xl md:text-5xl font-semibold leading-tight text-amber-50">
            Meditation Retreats for <br />
            <em>Inner Peace & Healing</em>
          </h1>

          {/* Text */}
          <p className="hero-text mt-5 text-white/80 leading-relaxed">
            Experience transformational meditation retreats designed to help you
            reconnect, heal, and grow. Join guided programs focused on mindfulness,
            emotional balance, and conscious living.
          </p>

          {/* Buttons */}
          <div className="hero-buttons mt-6 flex gap-3">
            <Button>Explore Programs</Button>
            <Button variant="secondary">Book a Session</Button>
          </div>

        </div>
      </div>

    </section>
  );
}