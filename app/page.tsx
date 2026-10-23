"use client";

import { useState } from "react";

import SearchBox from "./components/SearchBox";
import PropertyGrid from "./components/PropertyGrid";
import AffiliateBox from "./components/AffiliateBox";

import { properties } from "./data/properties";

export default function Home() {
  const [keyword, setKeyword] = useState("");

  const filtered = properties.filter((property) =>
    (
      property.city +
      property.title +
      property.layout +
      property.description
    )
      .toLowerCase()
      .includes(keyword.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto p-6">

        <SearchBox
          keyword={keyword}
          setKeyword={setKeyword}
        />

        <div className="mb-4 text-gray-600">
          検索結果：
          <span className="font-bold text-emerald-700">
            {" "}
            {filtered.length}件
          </span>
        </div>

        <PropertyGrid
          properties={filtered}
        />

        <AffiliateBox ids={["moving", "internet"]} />

      </div>

    </main>
  );
}
