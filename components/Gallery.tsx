import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { galleryImages } from "@/config/site";

export function Gallery() {
  return (
    <Section id="gallery" bg="off-white">
      <FadeIn>
        <p className="text-xs tracking-[0.5em] text-gold uppercase font-sans mb-8 text-center">
          Gallery
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-wide text-center mb-16">
          作品ギャラリー
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3"
          aria-label="ネイル作品ギャラリー"
        >
          {galleryImages.map((src, i) => (
            <li key={src} className="aspect-square overflow-hidden">
              <GalleryItem src={src} index={i} />
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="text-xs text-ink-sub font-sans tracking-wide text-center mt-10">
          ※画像は随時更新予定です。
        </p>
      </FadeIn>
    </Section>
  );
}

function GalleryItem({ src, index }: { src: string; index: number }) {
  const label = `ネイル作品 ${index + 1}`;

  // Check if image file exists by trying to render it; show placeholder if not
  return (
    <div className="relative w-full h-full group">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #ede7f6 0%, #d6cceb 50%, #c5b8e0 100%)",
        }}
        aria-label={`${label}（Coming Soon）`}
        role="img"
      >
        <div className="text-center">
          <div
            className="w-8 h-px bg-white/50 mx-auto mb-2"
            aria-hidden="true"
          />
          <span className="text-xs tracking-[0.2em] text-white/70 font-sans uppercase">
            Coming
            <br />
            Soon
          </span>
          <div
            className="w-8 h-px bg-white/50 mx-auto mt-2"
            aria-hidden="true"
          />
        </div>
      </div>
      {/*
        画像差し替え手順:
        1. /public/gallery/ に 01.jpg 〜 09.jpg を配置
        2. 上記のプレースホルダー div を削除し、以下を有効化:
        <Image src={src} alt={label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        3. next/image を import に追加
      */}
    </div>
  );
}
