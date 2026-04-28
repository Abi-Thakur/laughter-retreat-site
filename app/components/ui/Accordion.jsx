"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";

export default function Accordion({ items }) {
  const [active, setActive] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    const isOpen = active === index;

    setActive(isOpen ? null : index);

    contentRefs.current.forEach((el, i) => {
      if (!el) return;

      if (i === index && !isOpen) {
        gsap.to(el, {
          height: el.scrollHeight,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });
  };

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="border-b border-[var(--border-color)] pb-4"
        >
          {/* HEADER */}
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="text-lg font-medium text-[var(--text-color)]">
              {item.title}
            </span>

            <span className="text-xl text-[var(--secondary-color)]">
              {active === i ? "−" : "+"}
            </span>
          </button>

          {/* CONTENT */}
          <div
            ref={(el) => (contentRefs.current[i] = el)}
            className="overflow-hidden h-0 opacity-0"
          >
            <p className="mt-4 text-sm text-[var(--secondary-text)] leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}