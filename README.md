# Chiba Duo — 収益化セットアップ

千葉県の空き家バンク横断検索サイト。アフィリエイト・AdSenseで収益化できる構成になっています。

## 収益化の手順

1. Vercel 等にデプロイし、`.env.example` を参考に `NEXT_PUBLIC_SITE_URL` を設定
2. Google Search Console にサイトを登録し、`/sitemap.xml` を送信
3. A8.net・もしもアフィリエイト等に登録し、以下のジャンルの案件と提携
   - 引越し一括見積もり → `NEXT_PUBLIC_AFF_MOVING`
   - リフォーム一括見積もり → `NEXT_PUBLIC_AFF_REFORM`
   - 火災保険一括見積もり → `NEXT_PUBLIC_AFF_INSURANCE`
   - ホームルーター・光回線 → `NEXT_PUBLIC_AFF_INTERNET`
4. 記事が増えてきたら Google AdSense に申請し、`NEXT_PUBLIC_ADSENSE_CLIENT` を設定

リンク未設定の広告枠は自動的に非表示になります。広告を含むページには
ステマ規制（景品表示法）に対応した「PR」表記が入ります。

## 記事の追加

`app/data/posts.ts` に記事を追加すると、`/blog` 一覧・個別ページ・サイトマップに自動反映されます。
本文中の `{ type: "affiliate", ids: [...] }` で広告枠を差し込めます。

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
