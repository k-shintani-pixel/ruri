import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl tracking-widest text-white/90 mb-2">
              {siteConfig.salonName}
            </p>
            <p className="text-sm text-white/50 tracking-wider">
              &copy; {year} {siteConfig.salonName}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-5">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagramを開く（新しいタブ）"
                className="text-white/60 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={siteConfig.lineOfficialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE公式アカウントを開く（新しいタブ）"
                className="text-white/60 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-sm font-bold tracking-widest"
              >
                LINE
              </a>
            </div>
            <div className="flex items-center gap-5 text-xs text-white/40 tracking-wider">
              <a href="#" className="hover:text-white/70 transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                特定商取引法表記
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
