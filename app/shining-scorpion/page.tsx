"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

const TAIL_SEGMENTS = 5;
const SEGMENT_LENGTH = 34;
const LEG_ANGLES = [-38, -14, 10, 34];

function TailSegment({ index }: { index: number }) {
  if (index >= TAIL_SEGMENTS) {
    // 毒針
    return (
      <g className="stinger">
        <path
          d="M -12 0 Q -14 -26 0 -40 Q 6 -30 14 -34 Q 8 -20 12 0 Z"
          fill="url(#shellGradient)"
          stroke="#fff7c2"
          strokeWidth="1.5"
        />
        <circle cx="0" cy="-40" r="7" fill="#ffffff" filter="url(#strongGlow)" />
      </g>
    );
  }

  const width = 22 - index * 2;

  return (
    <g>
      <ellipse
        cx="0"
        cy={-SEGMENT_LENGTH / 2}
        rx={width / 2 + 4}
        ry={SEGMENT_LENGTH / 2 + 3}
        fill="url(#shellGradient)"
        stroke="#fff7c2"
        strokeWidth="1.5"
      />
      <line
        x1={-width / 2}
        y1={-SEGMENT_LENGTH / 2}
        x2={width / 2}
        y2={-SEGMENT_LENGTH / 2}
        stroke="#fffbe6"
        strokeOpacity="0.6"
      />
      <g
        className="tail-joint"
        style={{ animationDelay: `${index * 0.12}s` }}
        transform={`translate(0 ${-SEGMENT_LENGTH}) rotate(26)`}
      >
        <TailSegment index={index + 1} />
      </g>
    </g>
  );
}

function Leg({ side, angle, index }: { side: 1 | -1; angle: number; index: number }) {
  return (
    <g
      className="leg"
      style={{ animationDelay: `${(index + (side === 1 ? 0.5 : 0)) * 0.18}s` }}
      transform={`rotate(${angle * side})`}
    >
      <polyline
        points={`0,0 ${70 * side},-18 ${112 * side},26`}
        fill="none"
        stroke="url(#legGradient)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={70 * side} cy={-18} r="4.5" fill="#fff7c2" />
    </g>
  );
}

function Claw({ side }: { side: 1 | -1 }) {
  return (
    <g transform={`scale(${side} 1)`}>
      <polyline
        points="30,30 70,64 92,118"
        fill="none"
        stroke="url(#legGradient)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(92 118)">
        <ellipse cx="0" cy="22" rx="22" ry="30" fill="url(#shellGradient)" stroke="#fff7c2" strokeWidth="1.5" />
        <g className="pincer">
          <path d="M -14 40 Q -22 74 -2 88 Q -6 66 2 46 Z" fill="url(#shellGradient)" stroke="#fff7c2" strokeWidth="1.2" />
        </g>
        <path d="M 10 42 Q 22 74 6 90 Q 6 66 2 46 Z" fill="url(#shellGradient)" stroke="#fff7c2" strokeWidth="1.2" />
      </g>
    </g>
  );
}

export default function ShiningScorpionPage() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [striking, setStriking] = useState(false);

  useEffect(() => {
    setSparkles(
      Array.from({ length: 60 }, (_, id) => ({
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
      }))
    );
  }, []);

  const strike = () => {
    if (striking) return;
    setStriking(true);
    setTimeout(() => setStriking(false), 900);
  };

  return (
    <main className="scorpion-stage relative min-h-screen overflow-hidden bg-[#05030f] text-white">
      <style>{`
        .scorpion-stage { background: radial-gradient(circle at 50% 45%, #2a1550 0%, #0b0620 45%, #05030f 100%); }
        .sparkle { position: absolute; border-radius: 9999px; background: #fff6c8; box-shadow: 0 0 8px #ffd86b, 0 0 16px #6ef3ff; animation: twinkle ease-in-out infinite; }
        @keyframes twinkle { 0%,100% { opacity: 0; transform: scale(.4); } 50% { opacity: 1; transform: scale(1.2); } }
        .scorpion { animation: float 4s ease-in-out infinite; transform-origin: 300px 380px; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .tail-joint { animation: sway 2.4s ease-in-out infinite; transform-box: view-box; }
        @keyframes sway { 0%,100% { rotate: 0deg; } 50% { rotate: 6deg; } }
        .striking .tail-joint { animation: strike .9s cubic-bezier(.2,1.6,.4,1); }
        @keyframes strike { 0% { rotate: 0deg; } 30% { rotate: -14deg; } 55% { rotate: 16deg; } 100% { rotate: 0deg; } }
        .leg { animation: walk 1.1s ease-in-out infinite; }
        @keyframes walk { 0%,100% { rotate: 0deg; } 50% { rotate: 5deg; } }
        .pincer { animation: snap 1.6s ease-in-out infinite; transform-origin: -4px 44px; transform-box: view-box; }
        @keyframes snap { 0%,70%,100% { rotate: 0deg; } 80% { rotate: 14deg; } }
        .aura { animation: pulse 3s ease-in-out infinite; transform-origin: 300px 360px; }
        @keyframes pulse { 0%,100% { opacity: .55; transform: scale(1); } 50% { opacity: .9; transform: scale(1.08); } }
        .flash { animation: flash .9s ease-out; }
        @keyframes flash { 0% { opacity: 0; } 35% { opacity: .85; } 100% { opacity: 0; } }
        .title { background: linear-gradient(90deg, #ffe27a, #fff, #6ef3ff, #ffe27a); background-size: 300% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: shine 5s linear infinite; text-shadow: 0 0 30px rgba(255, 216, 107, .35); }
        @keyframes shine { to { background-position: 300% 0; } }
        @media (prefers-reduced-motion: reduce) { .scorpion, .tail-joint, .leg, .pincer, .aura, .sparkle, .title { animation: none; } }
      `}</style>

      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {striking && <div className="flash pointer-events-none absolute inset-0 bg-[#fff3b0]" />}

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 py-10">
        <h1 className="title text-center text-[clamp(1.5rem,7vw,3.5rem)] font-black tracking-widest whitespace-nowrap">
          シャイニングスコーピオン
        </h1>
        <p className="mt-2 text-sm tracking-[0.4em] text-amber-100/70">SHINING SCORPION</p>

        <button
          type="button"
          onClick={strike}
          aria-label="シャイニングスコーピオンの必殺技を発動"
          className={`mt-4 w-full max-w-[560px] cursor-pointer ${striking ? "striking" : ""}`}
        >
          <svg viewBox="0 120 600 520" className="h-auto w-full overflow-visible" role="img" aria-hidden="true">
            <defs>
              <linearGradient id="shellGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff3a8" />
                <stop offset="45%" stopColor="#ffb938" />
                <stop offset="100%" stopColor="#3fd8ff" />
              </linearGradient>
              <linearGradient id="legGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffcf5a" />
                <stop offset="100%" stopColor="#7ef0ff" />
              </linearGradient>
              <radialGradient id="auraGradient">
                <stop offset="0%" stopColor="#ffe48a" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#8a5cff" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </radialGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="strongGlow" x="-200%" y="-200%" width="500%" height="500%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle className="aura" cx="300" cy="360" r="260" fill="url(#auraGradient)" />

            <g className="scorpion" filter="url(#glow)">
              {/* 脚 */}
              <g transform="translate(300 360)">
                {LEG_ANGLES.map((angle, i) => (
                  <g key={i} transform={`translate(0 ${i * 22 - 30})`}>
                    <Leg side={-1} angle={angle} index={i} />
                    <Leg side={1} angle={angle} index={i} />
                  </g>
                ))}
              </g>

              {/* ハサミ */}
              <g transform="translate(300 400)">
                <Claw side={-1} />
                <Claw side={1} />
              </g>

              {/* 尻尾 */}
              <g transform="translate(300 268)">
                <TailSegment index={0} />
              </g>

              {/* 腹部 */}
              {[0, 1, 2, 3].map((i) => (
                <ellipse
                  key={i}
                  cx="300"
                  cy={290 + i * 26}
                  rx={44 + i * 3}
                  ry="18"
                  fill="url(#shellGradient)"
                  stroke="#fff7c2"
                  strokeWidth="1.5"
                />
              ))}

              {/* 頭胸部 */}
              <path
                d="M 252 380 Q 250 440 300 452 Q 350 440 348 380 Q 300 366 252 380 Z"
                fill="url(#shellGradient)"
                stroke="#fff7c2"
                strokeWidth="1.5"
              />
              <path d="M 300 382 L 300 440" stroke="#fffbe6" strokeOpacity="0.5" strokeWidth="2" />
              <circle cx="288" cy="408" r="5" fill="#ffffff" filter="url(#strongGlow)" />
              <circle cx="312" cy="408" r="5" fill="#ffffff" filter="url(#strongGlow)" />
            </g>
          </svg>
        </button>

        <p className="mt-2 text-center text-sm text-amber-100/80">
          サソリをタップすると必殺の一撃！
        </p>

        <Link href="/" className="mt-8 text-sm text-cyan-200/70 underline underline-offset-4 hover:text-cyan-100">
          ← トップへ戻る
        </Link>
      </div>
    </main>
  );
}
