import { site } from "../lib/site";

export default function WaitlistBox() {
  if (!site.waitlistUrl) {
    return null;
  }

  return (
    <section className="bg-amber-900 text-white rounded-xl p-8 my-10 text-center">
      <p className="text-sm text-amber-200 font-bold">準備中</p>
      <h2 className="text-2xl font-bold mt-2">一食分ずつの「醤油食べ比べセット」</h2>
      <p className="mt-4 text-amber-100 leading-7">
        普段と違う醤油を1本買うのは勇気がいる。だから、いろいろな蔵の醤油を
        少しずつ試せるセットを企画中です。発売時にお知らせを受け取りたい方はご登録ください。
      </p>
      <a
        href={site.waitlistUrl}
        target="_blank"
        rel="noopener"
        className="inline-block mt-6 bg-white text-amber-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-100"
      >
        発売のお知らせを受け取る（無料）
      </a>
    </section>
  );
}
