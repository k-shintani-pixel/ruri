import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/config/site";

export function InstagramFeed() {
  return (
    <Section id="instagram" bg="white">
      <FadeIn>
        <p className="text-xs tracking-[0.5em] text-gold uppercase font-sans mb-8 text-center">
          Instagram
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-wide text-center mb-4">
          最新の作品
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-ink-sub hover:text-gold transition-colors tracking-widest font-sans mb-12"
          aria-label={`Instagram @${siteConfig.instagramId} を開く（新しいタブ）`}
        >
          <InstagramIcon size={15} />
          <span>@{siteConfig.instagramId}</span>
        </a>
      </FadeIn>

      <FadeIn delay={0.2}>
        {/*
          Instagramフィード埋め込み手順（いずれかを選択）:

          【推奨】Behold (https://behold.so) や SnapWidget (https://snapwidget.com) 等の
          無料プランでウィジェットを作成し、以下のプレースホルダーを埋め込みコードに置き換えてください。

          例（SnapWidget）:
          <iframe src="https://snapwidget.com/embed/XXXXXX"
            className="snapwidget-widget" allowTransparency={true}
            frameBorder="0" scrolling="no"
            style={{ border: "none", overflow: "hidden", width: "100%", height: "600px" }}
            title="Instagram Feed"
          />

          例（Instagram個別投稿埋め込み）:
          各投稿の「…」→「埋め込む」で取得したコードを貼り付け
        */}

        {/* プレースホルダー グリッド */}
        <div
          className="grid grid-cols-3 gap-2 md:gap-3"
          aria-label="Instagramフィードのプレースホルダー"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #f5f0ff 0%, #ede7f6 100%)",
              }}
              aria-hidden="true"
            >
              <InstagramIcon size={20} className="text-accent-dark opacity-40" />
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="flex justify-center mt-10">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border-2 border-ink text-ink hover:bg-ink hover:text-white transition-colors text-sm tracking-widest font-sans font-medium min-h-[44px]"
            aria-label={`Instagram @${siteConfig.instagramId} をフォローする（新しいタブ）`}
          >
            <InstagramIcon size={15} />
            @{siteConfig.instagramId} をフォロー
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
