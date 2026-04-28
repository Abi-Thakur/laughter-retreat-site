'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MenuButton({ open, setOpen }) {
  const topRef = useRef(null);
  const midRef = useRef(null);
  const botRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.to(topRef.current, { y: 6, rotate: 45, duration: 0.3 });
      gsap.to(midRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(botRef.current, { y: -6, rotate: -45, duration: 0.3 });
    } else {
      gsap.to([topRef.current, botRef.current], {
        y: 0,
        rotate: 0,
        duration: 0.3,
      });
      gsap.to(midRef.current, { opacity: 1, duration: 0.2 });
    }
  }, [open]);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-10 h-10 flex items-center justify-center"
    >
      <div className="flex flex-col justify-between h-4">
        <span ref={topRef} className="h-[1.5px] w-6 bg-white"></span>
        <span ref={midRef} className="h-[1.5px] w-6 bg-white"></span>
        <span ref={botRef} className="h-[1.5px] w-6 bg-white"></span>
      </div>
    </button>
  );
}