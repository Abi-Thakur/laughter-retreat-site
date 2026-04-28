'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";
import { CheckCircle } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      // count animation
      statRefs.current.forEach((el) => {
        const target = +el.dataset.target;
        let obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.floor(obj.val);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-16 bg-(--secondary-background)"
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* IMAGE */}
        <div className="relative fade-up">
          <div className="relative w-full h-75 md:h-130 rounded-lg overflow-hidden bg-(--alternate-background)">
            <Image
              src="/AboutSection.png"
              alt="Meditation Retreat"
              fill
              className="object-cover"
            />
          </div>

          {/* QUOTE */}
          <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 max-w-[85%] md:max-w-[75%] bg-white/95 backdrop-blur-md p-5 rounded-lg shadow-sm">
            <p className="text-sm italic leading-relaxed text-(--text-color)">
              “The moment you accept yourself, you become beautiful.”
            </p>
            <p className="mt-2 text-xs text-(--secondary-text)">
              — Osho
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-xl">

          <div className="fade-up">
            <Eyebrow variant="dark">About Us</Eyebrow>
          </div>

          {/* HEADING */}
          <h2 className="fade-up mt-4 text-3xl md:text-4xl font-semibold leading-tight text-(--text-color)">
            Reconnect & Transform <br />
            <em>Your Inner Life</em> 
          </h2>

          {/* TEXT */}
          <p className="fade-up mt-5 text-base text-(--secondary-text) leading-relaxed">
            We create immersive meditation experiences that help you disconnect
            from noise and reconnect with clarity, balance, and conscious living.
          </p>

          {/* STATS */}
          <div className="fade-up mt-7 grid grid-cols-3 gap-8">

            {[
              { label: "Lives", value: 1500 },
              { label: "Years", value: 10 },
              { label: "Retreats", value: 50 },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-2xl font-semibold text-(--primary-color)">
                  <span
                    ref={(el) => (statRefs.current[i] = el)}
                    data-target={item.value}
                  >
                    0
                  </span>
                  +
                </p>
                <p className="mt-1 text-sm text-(--secondary-text)">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="fade-up mt-8">
            <Button className="px-6 py-2.5">
              Explore Our Story
            </Button>
          </div>

          {/* TRUST BADGES */}
          <div className="fade-up mt-8 flex flex-wrap gap-5 text-sm text-(--text-color)">

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-(--primary-color)" />
              Certified
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-(--primary-color)" />
              Global Community
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-(--primary-color)" />
              Guided Support
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}