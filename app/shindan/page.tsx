import type { Metadata } from "next";

import Quiz from "./Quiz";

export const metadata: Metadata = {
  title: "醤油タイプ診断",
  description: "3つの質問に答えるだけで、あなたの料理と好みに合う醤油のタイプが分かります。",
};

export default function ShindanPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold">醤油タイプ診断</h1>
        <p className="mt-2 text-gray-700">
          3つの質問で、あなたに合う醤油のタイプを診断します。
        </p>
        <Quiz />
      </div>
    </main>
  );
}
