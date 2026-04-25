"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Concept", href: "#concept" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Access", href: "#access" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-xl tracking-widest text-ink"
          aria-label={`${siteConfig.salonName} トップへ`}
        >
          {siteConfig.salonName}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="メインナビ">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest text-ink-sub hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.storesReserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center justify-center px-6 py-2.5 text-sm tracking-widest font-medium border-2 border-gold text-gold hover:bg-gold hover:text-white transition-colors min-h-[44px]"
            aria-label="予約ページへ（新しいタブで開きます）"
          >
            ご予約
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/97 backdrop-blur-sm border-t border-accent">
          <nav
            className="flex flex-col px-5 py-6 gap-6"
            aria-label="モバイルナビ"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base tracking-widest text-ink-sub hover:text-ink transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.storesReserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center px-6 py-3.5 text-base tracking-widest font-medium border-2 border-gold text-gold hover:bg-gold hover:text-white transition-colors min-h-[44px]"
              aria-label="予約ページへ（新しいタブで開きます）"
            >
              ご予約
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
