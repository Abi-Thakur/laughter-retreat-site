"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".testimonial", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // animation starts when section enters
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  const testimonials = [
    {
      name: "Emma Wilson",
      country: "UK",
      text: "This retreat changed my life. I found clarity, peace, and a deeper connection with myself.",
    },
    {
      name: "Rohan Mehta",
      country: "India",
      text: "The experience was beyond expectations. The facilitators, the energy, everything was perfect.",
    },
    {
      name: "Sophia Lee",
      country: "Singapore",
      text: "A beautiful journey of transformation. I came back lighter, calmer, and more aware.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-16 bg-(--secondary-background)"
    >
      {/* HEADER */}
      <div className="max-w-2xl mb-16 space-y-4">
        <p className="text-sm tracking-widest uppercase text-(--secondary-text)">
          Experiences
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-(--text-color)">
          What People Feel After the Retreat
        </h2>

        <p className="text-(--secondary-text)">
          Real stories from people who experienced deep transformation.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="testimonial bg-(--background-color) p-6 rounded-xl border border-(--border-color)"
          >
            <p className="text-(--secondary-text) leading-relaxed mb-6">
              “{item.text}”
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-(--text-color)">
                  {item.name}
                </p>
                <p className="text-sm text-(--secondary-text)">
                  {item.country}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full bg-(--primary-color)/20 flex items-center justify-center text-(--primary-color) text-sm">
                ★
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}