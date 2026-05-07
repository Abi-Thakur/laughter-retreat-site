"use client";

import { useState } from "react";
import MenuButton from "./ui/MenuButton";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import SocialIcons from "./ui/SocialIcons";
import MobileSidebar from "./ui/MobileSidebar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Retreats", href: "/retreats" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`${isHome ? "fixed top-0 left-0 backdrop-blur-sm bg-black/10" : "relative bg-(--primary-color)"} w-full z-50  border-b border-white/20`}>
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 md:px-16 py-4">
          
          {/* LOGO */}
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={70}
            height={50}
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* SEARCH */}
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-56 px-4 py-2 rounded-full bg-transparent text-white border border-white/30"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" size={16} />
              </div>
            </div>

            {/* CTA */}
            <div className="hidden sm:block">
              <a href="#contact-form">
                <Button variant="secondary">Contact us</Button>
              </a>
            </div>

            {/* MOBILE MENU */}
            <div className="sm:hidden">
              <MenuButton open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="px-6 md:px-16 hidden sm:flex justify-between border-t border-white/10">
          <nav className="py-2.5">
            <ul className="flex gap-6 text-white/80 text-sm">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <SocialIcons />
            <span className="h-4 w-px bg-white/20"></span>
            <button className="text-sm text-white/80 hover:text-white">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <MobileSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
    </>
  );
}