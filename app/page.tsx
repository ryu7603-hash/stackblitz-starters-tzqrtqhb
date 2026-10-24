import Link from "next/link";

import AffiliateBox from "./components/AffiliateBox";
import SoyTypeCard from "./components/SoyTypeCard";
import WaitlistBox from "./components/WaitlistBox";
import { posts } from "./data/posts";
import { soyTypes } from "./data/soy";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-5xl mx-auto p-6">
        <section className="text-center py-10">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            醤油の違い、
            <br className="md:hidden" />
            食べ比べたら分かる。
          </h1>
          <p className="mt-4 text-gray-700 leading-7">
            醤油は大きく5種類。いつもの一本以外を試すきっかけに、
            <br className="hidden md:block" />
            まずは自分の好みのタイプを知るところから始めましょう。
          </p>
          <Link
            href="/shindan"
            className="inline-block mt-8 bg-amber-900 text-white font-bold px-8 py-4 rounded-lg hover:bg-amber-950"
          >
            30秒で醤油タイプ診断
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">醤油の5つのタイプ</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {soyTypes.map((type) => (
              <SoyTypeCard key={type.id} type={type} />
            ))}
          </div>
        </section>

        <AffiliateBox ids={["starterSet", "miniBottles"]} />

        <WaitlistBox />

        <section>
          <h2 className="text-2xl font-bold mb-6">コラム</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
