"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden"
      aria-label="ヒーロービジュアル"
      style={{
        background:
          "linear-gradient(160deg, #faf8f5 0%, #ede7f6 40%, #faf8f5 100%)",
      }}
    >
      {/* Decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gold/30"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gold/30"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-xs tracking-[0.5em] text-gold uppercase mb-8 font-sans"
        >
          Nail Salon
        </motion.p>

        {/* Salon name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl tracking-widest text-ink mb-6 leading-tight"
        >
          {siteConfig.salonName}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-16 h-px bg-gold mb-8"
          aria-hidden="true"
        />

        {/* Catchphrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-serif text-lg md:text-xl text-ink-sub tracking-wider leading-relaxed mb-12"
        >
          {siteConfig.catchphrase}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href={siteConfig.storesReserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-10 py-4 bg-accent text-ink border-2 border-accent hover:bg-accent-dark hover:border-accent-dark transition-colors tracking-wider sm:tracking-widest text-base font-medium font-sans min-h-[52px] w-full sm:w-auto"
            aria-label="STORES予約ページへ（新しいタブで開きます）"
          >
            ご予約はこちら
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-6 sm:px-10 py-4 bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-white transition-colors tracking-wider sm:tracking-widest text-base font-medium font-sans min-h-[52px] w-full sm:w-auto"
          >
            メニューを見る
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-xs tracking-[0.3em] text-ink-sub font-sans">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
