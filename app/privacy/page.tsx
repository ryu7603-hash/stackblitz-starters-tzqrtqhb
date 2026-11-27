import type { Metadata } from "next";

import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー・広告について",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow p-8 leading-8 space-y-4">
          <h1 className="text-3xl font-bold">プライバシーポリシー・広告について</h1>

          <h2 className="text-xl font-bold pt-4">広告の掲載について</h2>
          <p>
            {site.name}
            は、アフィリエイトプログラムを利用して商品・サービスを紹介しています。当サイトのリンクを経由して商品の購入やサービスの申し込みが行われた場合、当サイトが報酬を受け取ることがあります。広告を含むページには「PR」等の表記を行っています。
          </p>
          <p>
            当サイトは第三者配信の広告サービス（Google
            AdSense等）を利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。Cookieを無効にする設定や、パーソナライズ広告の無効化は、各ブラウザの設定や
            Google の広告設定から行えます。
          </p>

          <h2 className="text-xl font-bold pt-4">アクセス解析について</h2>
          <p>
            当サイトでは、サービス向上のためにアクセス解析ツールを利用する場合があります。これらはCookieを利用してトラフィックデータを収集しますが、個人を特定する情報は含まれません。
          </p>

          <h2 className="text-xl font-bold pt-4">免責事項</h2>
          <p>
            味の感じ方には個人差があります。紹介している商品の価格・内容・在庫は変わることがあるため、購入前に販売ページで最新の情報をご確認ください。当サイトの情報を利用して生じた損害について、当サイトは責任を負いかねます。
          </p>
        </div>
      </div>
    </main>
  );
}
