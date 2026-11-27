export const site = {
  name: "味くらべ",
  tagline: "醤油の食べ比べガイド",
  description:
    "濃口・淡口・溜・再仕込・白。醤油の違いを知って、家で食べ比べて、自分好みの一本を見つけるためのガイドです。",
  // NEXT_PUBLIC_SITE_URL が未設定でも、Vercel 上では本番ドメインを自動で使う
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  ).replace(/\/+$/, ""),
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "",
  // 「一食分の食べ比べセット」予約受付フォーム（Googleフォーム等）のURL
  waitlistUrl: process.env.NEXT_PUBLIC_WAITLIST_URL ?? "",
  // Kindle本「いつもの調味料、変えてみる。」のAmazon商品ページURL（出版後に設定）
  ebookUrl: process.env.NEXT_PUBLIC_EBOOK_URL ?? "",
};
