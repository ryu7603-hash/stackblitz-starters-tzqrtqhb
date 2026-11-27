export type SoyTypeId = "koikuchi" | "usukuchi" | "tamari" | "saishikomi" | "shiro";

export type SoyType = {
  id: SoyTypeId;
  name: string;
  reading: string;
  color: string;
  taste: string;
  region: string;
  goodFor: string[];
};

export const soyTypes: SoyType[] = [
  {
    id: "koikuchi",
    name: "濃口醤油",
    reading: "こいくち",
    color: "bg-amber-900",
    taste: "香り・旨味・塩味のバランスがよい、いちばん標準的な醤油。",
    region: "全国（国内で最も多く造られている）",
    goodFor: ["卵かけご飯", "炒め物", "煮物", "つけ・かけ全般"],
  },
  {
    id: "usukuchi",
    name: "淡口醤油",
    reading: "うすくち",
    color: "bg-amber-600",
    taste: "色が淡く、素材の色を活かせる。色は薄いが塩分は濃口よりやや高め。",
    region: "関西で多く使われる",
    goodFor: ["お吸い物", "うどんつゆ", "炊き込みご飯", "煮浸し"],
  },
  {
    id: "tamari",
    name: "溜醤油",
    reading: "たまり",
    color: "bg-stone-900",
    taste: "大豆が主原料で、とろみと濃厚な旨味がある。",
    region: "愛知・岐阜・三重など中部地方",
    goodFor: ["刺身", "照り焼き", "せんべい", "佃煮"],
  },
  {
    id: "saishikomi",
    name: "再仕込醤油",
    reading: "さいしこみ",
    color: "bg-red-950",
    taste: "塩水の代わりに醤油で仕込む。色・香り・味ともに濃厚で「甘露醤油」とも呼ばれる。",
    region: "山口県柳井が発祥とされる",
    goodFor: ["刺身", "寿司", "冷奴", "かけ醤油"],
  },
  {
    id: "shiro",
    name: "白醤油",
    reading: "しろ",
    color: "bg-yellow-300",
    taste: "小麦が主原料で、色は琥珀色と極めて淡い。甘みと香りが特徴。",
    region: "愛知県碧南市が発祥とされる",
    goodFor: ["茶碗蒸し", "お吸い物", "白身魚の料理", "卵料理"],
  },
];

export function getSoyType(id: SoyTypeId) {
  return soyTypes.find((type) => type.id === id)!;
}
