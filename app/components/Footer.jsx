"use client";

import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-(--secondary-color) text-white px-6 md:px-16 pt-16 pb-8">
      
      {/* TOP */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={80}
            height={50}
          />

          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
            Creating spaces for inner peace, healing, and conscious living through
            immersive meditation experiences.
          </p>

          <div className="mt-5">
            <SocialIcons />
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-sm tracking-widest uppercase text-white/60">
            Explore
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/facilitators">Facilitators</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm tracking-widest uppercase text-white/60">
            Contact
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>Email: hello@laughterlovelive.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Himachal, India</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">

        <p>© {new Date().getFullYear()} Laughter Love Live. All rights reserved.</p>

        <div className="flex gap-6">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms</Link>
        </div>

      </div>

    </footer>
  );
}