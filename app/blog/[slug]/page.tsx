import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import AffiliateBox from "../../components/AffiliateBox";
import { getPost, posts } from "../../data/posts";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-3xl mx-auto p-6">
        <Link href="/blog" className="text-amber-800 hover:underline">
          ← コラム一覧へ戻る
        </Link>

        <article className="bg-white rounded-xl shadow p-8 mt-6">
          <p className="text-xs text-gray-500">
            {post.date}・本記事にはPR（広告）が含まれます
          </p>

          <h1 className="text-3xl font-bold mt-2">{post.title}</h1>

          <div className="mt-6 leading-8">
            {post.body.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2 key={i} className="text-2xl font-bold mt-10 mb-4 border-l-4 border-amber-800 pl-3">
                      {block.text}
                    </h2>
                  );
                case "p":
                  return <p key={i} className="my-4">{block.text}</p>;
                case "ul":
                  return (
                    <ul key={i} className="list-disc pl-6 my-4 space-y-1">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                case "affiliate":
                  return <AffiliateBox key={i} ids={block.ids} />;
              }
            })}
          </div>
        </article>

        <div className="mt-6 text-center">
          <Link
            href="/shindan"
            className="inline-block bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-950"
          >
            あなたに合う醤油を診断する
          </Link>
        </div>
      </div>
    </main>
  );
}
