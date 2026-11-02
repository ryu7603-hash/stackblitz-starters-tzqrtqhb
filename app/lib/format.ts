/**
 * 表示フォーマットの共通関数。
 * 価格・面積の表記はすべてここを通して統一する。
 */

/** 価格（万円単位の数値）を「1,280万円」形式で表示 */
export function formatPrice(manYen: number): string {
  return `${manYen.toLocaleString("ja-JP")}万円`;
}

/** 面積（㎡）を「1,234㎡」形式で表示 */
export function formatArea(squareMeters: number): string {
  return `${squareMeters.toLocaleString("ja-JP")}㎡`;
}
