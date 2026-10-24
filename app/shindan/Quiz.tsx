"use client";

import { useState } from "react";

import AffiliateBox from "../components/AffiliateBox";
import SoyTypeCard from "../components/SoyTypeCard";
import WaitlistBox from "../components/WaitlistBox";
import { getSoyType, SoyTypeId } from "../data/soy";

type Choice = {
  label: string;
  points: Partial<Record<SoyTypeId, number>>;
};

const questions: { text: string; choices: Choice[] }[] = [
  {
    text: "醤油をいちばん使う料理は？",
    choices: [
      { label: "刺身・寿司・冷奴", points: { saishikomi: 2, tamari: 2 } },
      { label: "煮物・お吸い物・うどん", points: { usukuchi: 2, shiro: 1 } },
      { label: "卵かけご飯・炒め物", points: { koikuchi: 2, shiro: 1 } },
      { label: "照り焼き・つけ焼き", points: { tamari: 2, koikuchi: 1 } },
    ],
  },
  {
    text: "好きな味の方向は？",
    choices: [
      { label: "すっきり・素材の味を活かしたい", points: { usukuchi: 2, shiro: 1 } },
      { label: "甘みとまろやかさ", points: { shiro: 2, saishikomi: 1 } },
      { label: "濃厚なコクと旨味", points: { tamari: 2, saishikomi: 2 } },
      { label: "クセのない定番の味", points: { koikuchi: 3 } },
    ],
  },
  {
    text: "料理の色について",
    choices: [
      { label: "素材の色をきれいに残したい", points: { shiro: 2, usukuchi: 2 } },
      { label: "特に気にしない", points: { koikuchi: 2 } },
      { label: "濃い色やツヤが欲しい", points: { tamari: 2, saishikomi: 1 } },
    ],
  },
];

function diagnose(answers: Choice[]): SoyTypeId {
  const scores: Record<SoyTypeId, number> = {
    koikuchi: 0,
    usukuchi: 0,
    tamari: 0,
    saishikomi: 0,
    shiro: 0,
  };

  for (const choice of answers) {
    for (const [id, point] of Object.entries(choice.points)) {
      scores[id as SoyTypeId] += point;
    }
  }

  // 同点のときは定義順（濃口が先）で決まる
  return (Object.keys(scores) as SoyTypeId[]).reduce((best, id) =>
    scores[id] > scores[best] ? id : best
  );
}

export default function Quiz() {
  const [answers, setAnswers] = useState<Choice[]>([]);

  if (answers.length === questions.length) {
    const type = getSoyType(diagnose(answers));

    return (
      <div className="mt-8">
        <p className="text-center text-gray-600">あなたにおすすめの醤油は…</p>
        <div className="mt-4">
          <SoyTypeCard type={type} />
        </div>
        <p className="mt-6 text-gray-700 leading-7">
          いつもの醤油と{type.name}を並べて、同じ料理で食べ比べてみてください。
          違いがいちばんよく分かるのは、冷奴や白いご飯のようなシンプルな料理です。
        </p>
        <AffiliateBox ids={["starterSet", "kioke"]} />
        <WaitlistBox />
        <button
          onClick={() => setAnswers([])}
          className="mt-6 w-full border border-amber-900 text-amber-900 font-bold rounded-lg p-3 hover:bg-amber-100"
        >
          もう一度診断する
        </button>
      </div>
    );
  }

  const question = questions[answers.length];

  return (
    <div className="mt-8 bg-white rounded-xl shadow p-6">
      <p className="text-sm text-gray-500">
        Q{answers.length + 1} / {questions.length}
      </p>
      <h2 className="text-xl font-bold mt-1">{question.text}</h2>

      <div className="mt-6 space-y-3">
        {question.choices.map((choice) => (
          <button
            key={choice.label}
            onClick={() => setAnswers([...answers, choice])}
            className="w-full text-left border rounded-lg p-4 hover:bg-amber-50 hover:border-amber-900"
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}
