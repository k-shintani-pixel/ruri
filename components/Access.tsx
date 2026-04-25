import { MapPin, Clock, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

export function Access() {
  return (
    <Section id="access" bg="off-white">
      <FadeIn>
        <p className="text-xs tracking-[0.5em] text-gold uppercase font-sans mb-8 text-center">
          Access
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-wide text-center mb-16">
          アクセス
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* Info */}
        <FadeIn delay={0.2}>
          <dl className="space-y-8">
            <div>
              <dt className="flex items-center gap-2 text-xs tracking-[0.3em] text-gold uppercase font-sans mb-3">
                <MapPin size={13} aria-hidden="true" />
                住所
              </dt>
              <dd className="font-sans text-base text-ink leading-relaxed">
                {siteConfig.address}
              </dd>
              <dd className="font-sans text-sm text-ink-sub mt-1">
                {siteConfig.station}
              </dd>
            </div>

            <div className="w-full h-px bg-accent" aria-hidden="true" />

            <div>
              <dt className="flex items-center gap-2 text-xs tracking-[0.3em] text-gold uppercase font-sans mb-3">
                <Clock size={13} aria-hidden="true" />
                営業時間
              </dt>
              <dd className="font-sans text-base text-ink leading-relaxed">
                {siteConfig.hours}
              </dd>
            </div>

            <div className="w-full h-px bg-accent" aria-hidden="true" />

            <div>
              <dt className="flex items-center gap-2 text-xs tracking-[0.3em] text-gold uppercase font-sans mb-3">
                <Calendar size={13} aria-hidden="true" />
                定休日
              </dt>
              <dd className="font-sans text-base text-ink leading-relaxed">
                {siteConfig.closedDays}
              </dd>
            </div>
          </dl>
        </FadeIn>

        {/* Map */}
        <FadeIn delay={0.3}>
          <div className="w-full aspect-[4/3] bg-accent/20 overflow-hidden">
            {siteConfig.mapEmbedUrl === "[GOOGLE_MAPS_EMBED_URL]" ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin
                    size={32}
                    className="text-accent-dark mx-auto mb-3"
                    aria-hidden="true"
                  />
                  <p className="text-xs tracking-wider text-ink-sub font-sans">
                    Google Maps
                    <br />
                    ここに埋め込まれます
                  </p>
                </div>
              </div>
            ) : (
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${siteConfig.salonName} Google Maps`}
              />
            )}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
