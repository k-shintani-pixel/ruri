import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig, menuItems } from "@/config/site";

export function Menu() {
  return (
    <Section id="menu" bg="white">
      <FadeIn>
        <p className="text-xs tracking-[0.5em] text-gold uppercase font-sans mb-8 text-center">
          Menu &amp; Price
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-wide text-center mb-16">
          メニュー・料金
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {menuItems.map((item, i) => (
          <FadeIn key={item.id} delay={0.1 * (i + 1)}>
            <article className="border border-accent hover:border-accent-dark transition-colors p-8 flex flex-col h-full group">
              <div className="mb-1">
                <div className="w-8 h-px bg-gold mb-6" aria-hidden="true" />
                <h3 className="font-serif text-xl text-ink tracking-wide mb-3">
                  {item.name}
                </h3>
                <p className="font-sans text-2xl font-medium text-gold tracking-wider mb-4">
                  {item.price}
                </p>
              </div>
              <p className="font-sans text-sm text-ink-sub leading-relaxed flex-1 mb-8">
                {item.description}
              </p>
              <a
                href={siteConfig.storesReserveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-widest text-ink hover:text-gold transition-colors font-sans font-medium group-hover:gap-3"
                aria-label={`${item.name}のご予約へ進む（新しいタブで開きます）`}
              >
                ご予約へ進む
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <p className="text-xs text-ink-sub font-sans tracking-wide text-center mt-12 leading-relaxed">
          ※付け替えオフのご希望有無は、ご予約フォームでお選びいただけます。
        </p>
      </FadeIn>
    </Section>
  );
}
