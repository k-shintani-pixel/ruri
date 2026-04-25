import { Phone, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

export function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="bg-ink px-5 py-20 md:py-28"
      aria-label="予約セクション"
    >
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.5em] text-gold uppercase font-sans mb-8">
            Reservation
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-6">
            ご予約
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="w-12 h-px bg-gold mx-auto mb-10" aria-hidden="true" />
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-sans text-sm text-white/60 tracking-wide leading-relaxed mb-12">
            24時間オンラインで受付中。
            <br />
            ご予約はSTORES予約よりお手続きください。
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href={siteConfig.storesReserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-accent text-ink hover:bg-accent-dark transition-colors text-base tracking-widest font-sans font-medium min-h-[56px] mb-10"
            aria-label="STORES予約ページへ（新しいタブで開きます）"
          >
            STORES予約でご予約
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="space-y-4">
            <p className="text-xs text-white/40 font-sans tracking-wide">
              または
            </p>

            <a
              href={`tel:${siteConfig.tel}`}
              className="flex items-center justify-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors tracking-wider font-sans min-h-[44px]"
              aria-label={`電話でのご予約：${siteConfig.tel}`}
            >
              <Phone size={15} aria-hidden="true" />
              お電話でのご予約：{siteConfig.tel}
            </a>

            <div className="w-full h-px bg-white/10 my-6" aria-hidden="true" />

            <a
              href={siteConfig.lineOfficialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-colors text-sm tracking-widest font-sans font-medium min-h-[44px]"
              aria-label="LINE公式アカウントでお問い合わせ（新しいタブ）"
            >
              <span
                className="font-bold text-base leading-none"
                aria-hidden="true"
              >
                LINE
              </span>
              LINEでのお問い合わせ・ご相談はこちら
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
