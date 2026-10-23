import Link from "next/link";

import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-3">
        <p>当サイトはアフィリエイト広告を利用しています。</p>
        <nav className="flex gap-4">
          <Link href="/blog" className="hover:underline">コラム</Link>
          <Link href="/privacy" className="hover:underline">プライバシーポリシー・広告について</Link>
        </nav>
        <p>© {site.name}</p>
      </div>
    </footer>
  );
}
