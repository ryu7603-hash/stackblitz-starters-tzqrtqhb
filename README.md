# 味くらべ — 醤油の食べ比べガイド

醤油の種類・食べ比べ方・使い分けを紹介し、既存の食べ比べセットをアフィリエイトで紹介するサイト。
あわせて「一食分の食べ比べセット」の予約登録を集め、自社商品の需要を検証する。

## 稼ぐ仕組み

- **今すぐ**: 既存の食べ比べセット・ミニボトルのアフィリエイト（在庫・営業許可が不要）
- **検証**: 予約登録の数で「一食分セット」を本当に買う人がいるかを測る
- **今すぐ**: Kindle本「いつもの調味料、変えてみる。」（`ebook/`）をサイトから紹介
- **将来**: 登録が集まったら、蔵元と組んで自社セットを販売

## 公開までの手順

1. Vercel 等にデプロイし、`.env.example` を参考に `NEXT_PUBLIC_SITE_URL` を設定
2. Google Search Console にサイトを登録し、`/sitemap.xml` を送信
3. 楽天アフィリエイト・Amazonアソシエイト・もしもアフィリエイト等に登録し、
   食べ比べセットの商品リンクを `NEXT_PUBLIC_AFF_*` に設定
4. Googleフォームで予約登録フォームを作り、`NEXT_PUBLIC_WAITLIST_URL` に設定
5. Kindle本を出版したら（`ebook/PUBLISH.md`）、商品ページURLを `NEXT_PUBLIC_EBOOK_URL` に設定
6. 記事が増えたら Google AdSense に申請し、`NEXT_PUBLIC_ADSENSE_CLIENT` を設定

リンク未設定の広告枠・予約枠・書籍枠は自動的に非表示になります。広告を含むページには
ステマ規制（景品表示法）に対応した「PR」表記が入ります。

## 記事の追加

`app/data/posts.ts` に記事を追加すると、一覧・個別ページ・サイトマップに自動反映されます。
本文中の `{ type: "affiliate", ids: [...] }` で広告枠を差し込めます。
醤油タイプの情報は `app/data/soy.ts`、診断の質問は `app/shindan/Quiz.tsx` にあります。

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
