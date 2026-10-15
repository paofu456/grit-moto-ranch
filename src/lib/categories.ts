// Product families of the customer's own catalog (confirmed 2026-10-15).
// The content schema validates the same key set in src/content.config.ts.
export const CATEGORIES = [
  { key: "riding", label: "骑行支架", blurb: "摩托车、电动车与自行车的手机支架，含后视镜款、车把款与六爪款。" },
  { key: "desktop", label: "桌面支架", blurb: "桌面与便携折叠支架、旋转支架、腕带与臂带款。" },
  { key: "car", label: "车载支架", blurb: "出风口、后视镜、头枕与后排用车载手机支架。" },
  { key: "auto-acc", label: "车载用品", blurb: "停车号码牌系列与防滑仪表台垫等车内用品。" },
  { key: "laptop", label: "笔记本支架", blurb: "锌合金、ABS 与铁质笔记本支架，含 16 与 18 英寸版本。" },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export function categoryLabel(key: string): string {
  return CATEGORIES.find((item) => item.key === key)?.label ?? key;
}
