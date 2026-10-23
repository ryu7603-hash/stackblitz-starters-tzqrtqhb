import Link from "next/link";

import { site } from "../lib/site";

export default function Header() {
  return (
    <header className="bg-emerald-700 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-end justify-between gap-4">
        <Link href="/">
          <p className="text-4xl font-bold">
            🏡 {site.name}
          </p>

          <p className="text-emerald-100 mt-2">
            {site.tagline}
          </p>
        </Link>

        <nav className="flex gap-6 font-bold">
          <Link href="/" className="hover:underline">物件を探す</Link>
          <Link href="/blog" className="hover:underline">コラム</Link>
        </nav>
      </div>
    </header>
  );
}
