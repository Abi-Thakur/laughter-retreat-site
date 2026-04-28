'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import Button from "./Button";

export default function MobileSidebar({ open, setOpen, menuItems }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.to(panelRef.current, {
        x: 0,
        duration: 0.45,
        ease: "power3.out",
      });

      // optional: stagger menu items
      gsap.fromTo(
        ".mobile-link",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          delay: 0.2,
          duration: 0.5,
          ease: "power2.out",
        }
      );

    } else {
      gsap.to(panelRef.current, {
        x: "100%",
        duration: 0.35,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* SIDEBAR PANEL */}
      <div
        ref={panelRef}
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0b1f17] z-50 translate-x-full flex flex-col p-6"
      >

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-white/80 text-sm tracking-wide">Menu</p>
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* NAV LINKS */}
        <nav>
          <ul className="flex flex-col gap-6 text-white text-lg">
            {menuItems.map((item) => (
              <li key={item.href} className="mobile-link">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-white/70 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* BOTTOM SECTION */}
        <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-6">

          {/* CTA */}
          <Button className="w-full">
            Contact Us
          </Button>

          {/* SOCIAL + LOGIN */}
          <div className="flex items-center justify-between">

            {/* SOCIAL ICONS */}
            <SocialIcons />

            {/* LOGIN */}
            <button className="text-sm text-white/70 hover:text-white transition">
              Login
            </button>

          </div>

        </div>

      </div>
    </>
  );
}