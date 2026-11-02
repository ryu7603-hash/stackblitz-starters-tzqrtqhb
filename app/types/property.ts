/**
 * 物件データの標準型。
 * 物件に関する型はこのファイルだけで定義し、各コンポーネントは import して使う。
 */
export type Property = {
  /** 一意のID（詳細ページ /property/[id] に使用） */
  id: number;
  /** 市町村名（例: "勝浦市"） */
  city: string;
  /** 物件タイトル */
  title: string;
  /** 価格（単位: 万円） */
  price: number;
  /** 間取り（例: "4LDK"） */
  layout: string;
  /** 土地面積（単位: ㎡） */
  land: number;
  /** 物件画像URL */
  image: string;
  /** 物件説明文 */
  description: string;
};
