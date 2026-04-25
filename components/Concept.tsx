import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export function Concept() {
  return (
    <Section id="concept" bg="off-white">
      <FadeIn>
        <p className="text-xs tracking-[0.5em] text-gold uppercase font-sans mb-8 text-center">
          Concept
        </p>
      </FadeIn>

      <div className="max-w-2xl mx-auto text-center">
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-wide leading-snug mb-10">
            日常に、
            <br />
            小さな贅沢を。
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-10" aria-hidden="true">
            <div className="w-12 h-px bg-gold" />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="font-sans text-base text-ink-sub leading-[2] tracking-wide">
            忙しい日々の中で、ほんの少しだけ自分を大切にする時間。
            <br className="hidden sm:block" />
            熟練のネイリストが、あなたの指先に丁寧に向き合います。
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-sans text-base text-ink-sub leading-[2] tracking-wide mt-6">
            素材にこだわった高品質なジェルと、
            <br className="hidden sm:block" />
            季節ごとに更新されるデザインラインナップ。
            <br className="hidden sm:block" />
            ご来店から仕上がりまで、心地よい時間をお届けします。
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
