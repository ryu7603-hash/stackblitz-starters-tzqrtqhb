export const site = {
  name: "味くらべ",
  tagline: "醤油の食べ比べガイド",
  description:
    "濃口・淡口・溜・再仕込・白。醤油の違いを知って、家で食べ比べて、自分好みの一本を見つけるためのガイドです。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "",
  // 「一食分の食べ比べセット」予約受付フォーム（Googleフォーム等）のURL
  waitlistUrl: process.env.NEXT_PUBLIC_WAITLIST_URL ?? "",
};
