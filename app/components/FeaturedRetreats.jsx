"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RetreatCard from "./ui/RetreatCard";
import Eyebrow from "./ui/Eyebrow";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedRetreats({ data = [] }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".retreat-card");

    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  // ✅ No sorting, just render everything
  const retreats = data || [];

  return (
    <section className="py-10 md:py-24 px-6 md:px-16 bg-(--secondary-background)">
      
      {/* HEADER */}
      <div className="max-w-2xl mb-16 space-y-4">
        <Eyebrow variant="dark">Featured Retreats</Eyebrow>

        <h2 className="text-3xl md:text-4xl font-serif text-(--text-color)">
          Transformational Experiences
        </h2>

        <p className="text-(--secondary-text)">
          Discover immersive retreats designed to reconnect, heal, and grow.
        </p>
      </div>

      {/* EMPTY STATE */}
      {retreats.length === 0 ? (
        <p className="text-center text-(--secondary-text)">
          No retreats available right now.
        </p>
      ) : (
        <div
          ref={containerRef}
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
        >
          {retreats.map((item, index) => (
            <div key={item.slug || index} className="retreat-card">
              <RetreatCard
                title={item.title}
                slug={item.slug}
                description={item.excerpt}
                startDate={item.startDate}
                endDate={item.endDate}
                price={item.price}
                currency={item.currency}
                image={item.image}
                tag={item.tag}
                location={item.location}
              />
            </div>
          ))}
        </div>
      )}

      {/* BUTTON */}
      <div className="mt-16 flex justify-center">
        <a
          href="/retreats"
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-full 
                     border border-(--secondary-color) text-(--secondary-color) 
                     transition-all duration-300 hover:bg-(--secondary-color) hover:text-white"
        >
          View All Retreats →
        </a>
      </div>
    </section>
  );
}