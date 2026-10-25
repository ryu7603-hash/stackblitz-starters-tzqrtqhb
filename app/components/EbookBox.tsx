import { site } from "../lib/site";

export default function EbookBox() {
  if (!site.ebookUrl) {
    return null;
  }

  return (
    <section className="bg-white border border-amber-200 rounded-xl p-8 my-10 flex flex-col md:flex-row gap-6 items-center">
      <div className="flex-1">
        <p className="text-xs text-amber-700 font-bold">PR・Kindle本</p>
        <h2 className="text-2xl font-bold mt-2">いつもの調味料、変えてみる。</h2>
        <p className="text-amber-900 font-bold mt-1">さしすせそ食べ比べ入門</p>
        <p className="mt-4 text-gray-700 leading-7">
          醤油だけでなく、砂糖・塩・酢・味噌・みりんまで。家でできる食べ比べの手順と、
          書き込める記録シートをまとめた30分で読める入門書です。Kindle Unlimited でも読めます。
        </p>
      </div>
      <a
        href={site.ebookUrl}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="shrink-0 bg-amber-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-950"
      >
        Amazonで見る
      </a>
    </section>
  );
}
