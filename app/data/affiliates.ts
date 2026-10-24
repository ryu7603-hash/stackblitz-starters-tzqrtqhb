// ASP（楽天アフィリエイト・Amazonアソシエイト・もしもアフィリエイト等）で
// 発行された広告リンクを各 url に貼り付ける。url が空の案件は表示されない。
export type AffiliateOffer = {
  id: string;
  label: string;
  description: string;
  cta: string;
  url: string;
};

export const affiliates = {
  starterSet: {
    id: "starterSet",
    label: "醤油の種類を一通り試せる食べ比べセット",
    description: "濃口・淡口・溜・再仕込・白など、種類の違いを一度に比べられるセット。最初の一回におすすめです。",
    cta: "食べ比べセットを見る",
    url: process.env.NEXT_PUBLIC_AFF_STARTER_SET ?? "",
  },
  miniBottles: {
    id: "miniBottles",
    label: "蔵元のミニボトルセット",
    description: "1つの蔵の醤油を小さめのボトルで数種類。同じ蔵でも仕込みの違いで味が変わるのが分かります。",
    cta: "ミニボトルセットを見る",
    url: process.env.NEXT_PUBLIC_AFF_MINI_BOTTLES ?? "",
  },
  kioke: {
    id: "kioke",
    label: "木桶仕込み醤油の飲み比べ",
    description: "昔ながらの木桶で仕込んだ醤油は、蔵ごとの個性が出やすいのが魅力。違いを楽しみたい人向けです。",
    cta: "木桶醤油を見る",
    url: process.env.NEXT_PUBLIC_AFF_KIOKE ?? "",
  },
  dashi: {
    id: "dashi",
    label: "だし醤油のお試しセット",
    description: "かけるだけで味が決まるだし醤油。普段使いの醤油と並べて比べると、違いがはっきり分かります。",
    cta: "だし醤油のお試しを見る",
    url: process.env.NEXT_PUBLIC_AFF_DASHI ?? "",
  },
} satisfies Record<string, AffiliateOffer>;

export type AffiliateId = keyof typeof affiliates;
