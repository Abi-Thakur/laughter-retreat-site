'use client'

import React, { useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const btnRef = useRef(null);

  const handleClick = () => {
    gsap.fromTo(
      btnRef.current,
      { scale: 1 },
      { scale: 0.96, duration: 0.15, yoyo: true, repeat: 1 }
    );
  };

  const base =
    "group relative overflow-hidden inline-flex items-center justify-center px-7 py-3 min-w-[150px] rounded-md text-sm font-medium tracking-wide border transition-all duration-300";

  const variants = {
    primary: `
      bg-[var(--primary-color)] 
      text-white 
      border-[var(--primary-color)]
    `,
    secondary: `
      bg-transparent 
      text-white 
      border-white/60
    `,
  };

  return (
    <button
    suppressHydrationWarning
      ref={btnRef}
      onClick={handleClick}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {/* HOVER LAYER */}
      <span
        className={clsx(
          "absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out",
          variant === "primary"
            ? "bg-white"
            : "bg-(--secondary-color)"
        )}
      />

      {/* TEXT */}
      <span
        className={clsx(
          "relative z-10 transition-colors duration-300",
          variant === "primary"
            ? "group-hover:text-(--primary-color)"
            : "group-hover:text-white"
        )}
      >
        {children}
      </span>
    </button>
  );
}