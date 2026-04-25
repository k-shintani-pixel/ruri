import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
  ),
  title: {
    default: `${siteConfig.salonName} | ネイルサロン`,
    template: `%s | ${siteConfig.salonName}`,
  },
  description: `${siteConfig.salonName} | ${siteConfig.station}のネイルサロン。ワンカラー¥4,980〜、定額制デザイン¥6,500〜。24時間オンライン予約受付中。`,
  openGraph: {
    title: `${siteConfig.salonName} | ネイルサロン`,
    description: `${siteConfig.salonName} | ${siteConfig.station}のネイルサロン。ワンカラー¥4,980〜、定額制デザイン¥6,500〜。24時間オンライン予約受付中。`,
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.salonName} ネイルサロン`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.salonName} | ネイルサロン`,
    description: `${siteConfig.salonName} | ${siteConfig.station}のネイルサロン。`,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
