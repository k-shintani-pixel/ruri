export const siteConfig = {
  salonName: "[SALON_NAME]",
  catchphrase: "あなたの指先に、上質なひとときを",
  storesReserveUrl: "https://cdv8ghimcrnfwf2okbqr.stores.jp/reserve/48ad0f8c92357e613723/4674126",
  lineOfficialUrl: "[LINE_OFFICIAL_URL]",
  instagramId: "[INSTAGRAM_ID]",
  instagramUrl: "https://instagram.com/[INSTAGRAM_ID]",
  tel: "[TEL]",
  address: "[ADDRESS]",
  station: "[STATION]",
  hours: "[HOURS]",
  closedDays: "[CLOSED_DAYS]",
  mapEmbedUrl: "[GOOGLE_MAPS_EMBED_URL]",
} as const;

export const galleryImages = [
  "/gallery/01.jpg",
  "/gallery/02.jpg",
  "/gallery/03.jpg",
  "/gallery/04.jpg",
  "/gallery/05.jpg",
  "/gallery/06.jpg",
  "/gallery/07.jpg",
  "/gallery/08.jpg",
  "/gallery/09.jpg",
];

export const menuItems = [
  {
    id: "one-color",
    name: "ワンカラー",
    price: "¥4,980〜",
    description:
      "シンプルな単色仕上げ。清潔感と洗練されたスタイルを、豊富なカラーラインナップからお選びいただけます。",
  },
  {
    id: "simple-design",
    name: "定額制シンプルデザイン",
    price: "¥6,500〜",
    description:
      "人気のデザインから選択いただける定額プラン。季節ごとに更新されるデザインラインナップをお楽しみください。",
  },
  {
    id: "extension",
    name: "長さ出し / 亀裂補修",
    price: "オプション",
    description:
      "1本ごとの料金は当日ご案内いたします。お気軽にご相談ください。",
  },
] as const;
