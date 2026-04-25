# ネイルサロン公式サイト

Next.js 15 + Tailwind CSS v4 + Framer Motion で構築したネイルサロンのLPサイトです。

## プレースホルダーの置換場所一覧

すべてのプレースホルダーは **`/config/site.ts`** の `siteConfig` オブジェクトに集約されています。
このファイルを変更するだけで、全ページに反映されます。

| プレースホルダー | 説明 | 置換場所 |
|---|---|---|
| `[SALON_NAME]` | サロン名 | `config/site.ts` → `salonName` |
| `[STORES_RESERVE_URL]` | STORES予約のURL | `config/site.ts` → `storesReserveUrl` |
| `[LINE_OFFICIAL_URL]` | LINE公式アカウントURL | `config/site.ts` → `lineOfficialUrl` |
| `[INSTAGRAM_ID]` | Instagramアカウント名（@なし） | `config/site.ts` → `instagramId` |
| `[TEL]` | 電話番号（ハイフンあり） | `config/site.ts` → `tel` |
| `[ADDRESS]` | 住所 | `config/site.ts` → `address` |
| `[STATION]` | 最寄駅・アクセス | `config/site.ts` → `station` |
| `[HOURS]` | 営業時間 | `config/site.ts` → `hours` |
| `[CLOSED_DAYS]` | 定休日 | `config/site.ts` → `closedDays` |
| `[GOOGLE_MAPS_EMBED_URL]` | Google Maps埋め込みURL | `config/site.ts` → `mapEmbedUrl` |

### Google Maps埋め込みURLの取得方法

1. Google Maps でサロンを検索
2. 「共有」→「地図を埋め込む」→ `src="..."` の部分のURLをコピー
3. `config/site.ts` の `mapEmbedUrl` に貼り付け

### Instagramフィードの埋め込み方法

`components/InstagramFeed.tsx` にコメントで手順を記載しています。
推奨は [Behold](https://behold.so) または [SnapWidget](https://snapwidget.com) の無料プランを使用する方法です。

### ギャラリー画像の差し替え方法

1. `/public/gallery/` に `01.jpg`〜`09.jpg` を配置
2. `components/Gallery.tsx` の `GalleryItem` 内のコメントを参照して置き換え
3. 枚数を増減する場合は `config/site.ts` の `galleryImages` 配列を更新

### OGP画像の差し替え方法

`/public/og-image.png`（1200×630px 推奨）を配置してください。
現在は `/public/og-image.svg` がプレースホルダーとして入っています。

---

## 開発環境の起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## ビルド

```bash
npm run build
npm run start
```

---

## Vercelへのデプロイ手順

1. [Vercel](https://vercel.com) にサインイン（GitHubアカウント推奨）
2. 「Add New Project」→ このリポジトリを選択
3. Framework Preset: **Next.js**（自動検出されます）
4. 「Deploy」をクリック

デプロイ後、Vercelのダッシュボードからカスタムドメインを設定できます。

---

## 技術スタック

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Framer Motion** (スクロールアニメーション)
- **Lucide React** (アイコン)
- **next/font** (Noto Serif JP / Noto Sans JP)
