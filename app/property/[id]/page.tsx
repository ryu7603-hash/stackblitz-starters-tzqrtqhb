import Link from "next/link";
import { notFound } from "next/navigation";

import { properties } from "../../data/properties";

type Props = {
  params: {
    id: string;
  };
};

export default function PropertyPage({ params }: Props) {
  const property = properties.find(
    (p) => p.id === Number(params.id)
  );

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto p-6">

        <Link
          href="/"
          className="text-emerald-700 hover:underline"
        >
          ← 一覧へ戻る
        </Link>

        <img
          src={property.image}
          alt={property.title}
          className="w-full rounded-xl mt-6"
        />

        <div className="bg-white rounded-xl shadow p-8 mt-6">

          <h1 className="text-4xl font-bold">
            {property.city}
          </h1>

          <h2 className="text-2xl mt-2">
            {property.title}
          </h2>

          <p className="text-emerald-700 text-5xl font-bold mt-6">
            {property.price}万円
          </p>

          <div className="mt-6 space-y-2 text-lg">
            <p>間取り：{property.layout}</p>
            <p>土地：{property.land}㎡</p>
          </div>

          <hr className="my-8" />

          <p className="leading-8">
            {property.description}
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800"
            >
              空き家バンクを見る
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}