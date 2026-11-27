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
  saishikomi: {
    id: "saishikomi",
    label: "再仕込醤油（甘露醤油）",
    description: "醤油で醤油を仕込む、濃厚な味わいの一本。刺身や冷奴にかけると、いつもの濃口との違いがはっきり分かります。",
    cta: "再仕込醤油を見る",
    url: process.env.NEXT_PUBLIC_AFF_SAISHIKOMI ?? "",
  },
  shiro: {
    id: "shiro",
    label: "白醤油",
    description: "琥珀色の淡い醤油。料理に色を付けずに、甘みと香りを足したいときに便利です。",
    cta: "白醤油を見る",
    url: process.env.NEXT_PUBLIC_AFF_SHIRO ?? "",
  },
  lowSalt: {
    id: "lowSalt",
    label: "減塩醤油",
    description: "塩分を控えめにした醤油。普段の醤油と並べて味の違いを確かめてから切り替えると失敗しにくいです。",
    cta: "減塩醤油を見る",
    url: process.env.NEXT_PUBLIC_AFF_LOW_SALT ?? "",
  },
  freshBottle: {
    id: "freshBottle",
    label: "密封ボトル入りの醤油",
    description: "開けたあとも空気に触れにくい二重構造の容器入り。少しずつ使う家庭でも、色と香りが変わりにくいのが魅力です。",
    cta: "密封ボトルの醤油を見る",
    url: process.env.NEXT_PUBLIC_AFF_FRESH_BOTTLE ?? "",
  },
} satisfies Record<string, AffiliateOffer>;

export type AffiliateId = keyof typeof affiliates;
