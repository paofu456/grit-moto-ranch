export const siteConfig = {
  language: "zh-CN",
  locale: "zh_CN",
  siteUrl: undefined as string | undefined,
  siteMode: "local" as "local" | "production",
  contentStatus: "draft" as "demo" | "draft" | "ready",
  navigation: [
    { label: "首页", href: "/" },
    { label: "产品商城", href: "/products/" },
    { label: "品牌故事", href: "/about/" },
    { label: "帮助中心", href: "/help/" },
  ],
};
