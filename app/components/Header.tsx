import Link from "next/link";

import { site } from "../lib/site";

export default function Header() {
  return (
    <header className="bg-amber-900 text-white shadow">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-wrap items-end justify-between gap-4">
        <Link href="/">
          <p className="text-3xl font-bold">🍶 {site.name}</p>
          <p className="text-amber-200 mt-1">{site.tagline}</p>
        </Link>

        <nav className="flex gap-6 font-bold">
          <Link href="/shindan" className="hover:underline">醤油タイプ診断</Link>
          <Link href="/blog" className="hover:underline">コラム</Link>
        </nav>
      </div>
    </header>
  );
}
