// ASP（A8.net・もしもアフィリエイト・バリューコマース等）で提携後、
// 発行された広告リンクを各 url に貼り付ける。url が空の案件は表示されない。
export type AffiliateOffer = {
  id: string;
  label: string;
  description: string;
  cta: string;
  url: string;
};

export const affiliates = {
  moving: {
    id: "moving",
    label: "引越し一括見積もり",
    description: "複数の引越し業者の見積もりをまとめて比較。遠方への移住ほど差が出やすい項目です。",
    cta: "無料で見積もりを比較する",
    url: process.env.NEXT_PUBLIC_AFF_MOVING ?? "",
  },
  reform: {
    id: "reform",
    label: "リフォーム一括見積もり",
    description: "空き家・古民家の改修費は業者によって大きく変わります。購入前に概算を把握しておくと安心です。",
    cta: "リフォーム費用を比較する",
    url: process.env.NEXT_PUBLIC_AFF_REFORM ?? "",
  },
  insurance: {
    id: "insurance",
    label: "火災保険の一括見積もり",
    description: "築年数の古い物件や海沿いの物件は補償内容の確認が重要。複数社をまとめて比較できます。",
    cta: "火災保険を比較する",
    url: process.env.NEXT_PUBLIC_AFF_INSURANCE ?? "",
  },
  internet: {
    id: "internet",
    label: "ホームルーター・光回線",
    description: "地方の空き家は回線未開通のことも。工事不要のホームルーターなら入居初日から使えます。",
    cta: "回線プランを見る",
    url: process.env.NEXT_PUBLIC_AFF_INTERNET ?? "",
  },
} satisfies Record<string, AffiliateOffer>;

export type AffiliateId = keyof typeof affiliates;
