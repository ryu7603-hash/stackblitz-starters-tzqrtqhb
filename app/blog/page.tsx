import type { Metadata } from "next";
import Link from "next/link";

import { posts } from "../data/posts";

export const metadata: Metadata = {
  title: "移住・二拠点生活コラム",
  description: "空き家購入、二拠点生活、古民家リノベに役立つ情報をまとめています。",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">移住・二拠点生活コラム</h1>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-500">{post.date}</p>
              <h2 className="text-xl font-bold mt-1">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
