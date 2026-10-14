#!/usr/bin/env node
// 停滞している作業について GPT に相談する。
// 使い方: node ask-gpt.mjs [--followup] < briefing.md
//   --followup  前回の協議履歴を引き継いで再質問する
// 環境変数: OPENAI_API_KEY（必須）, OPENAI_MODEL（省略時 gpt-4o）, OPENAI_BASE_URL（省略可）
// 終了コード: 0 成功 / 1 入力なし / 2 API キー未設定 / 3 API 呼び出し失敗

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const HISTORY_PATH = resolve(process.cwd(), '.claude/watch/gpt-history.json');

const SYSTEM_PROMPT = `あなたはソフトウェア開発の相談役です。
別の AI エージェント（Claude）が作業の停滞を報告します。次の形式で簡潔に答えてください。

## 原因分析
## 推奨案（理由つき。複数あれば優先順）
## リスク・注意点
## 人間の判断が必要か（必要/不要 と理由）

事実が足りない場合は、推測で埋めずに「追加で確認すべきこと」を挙げてください。`;

const followup = process.argv.includes('--followup');
const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_MODEL || 'gpt-4o';
const baseUrl = (process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '');

const input = readFileSync(0, 'utf8').trim();
if (!input) {
  console.error('ask-gpt: 標準入力に相談内容を渡してください');
  process.exit(1);
}
if (!apiKey) {
  console.error('ask-gpt: OPENAI_API_KEY が未設定です。GPT 協議をスキップしてください');
  process.exit(2);
}

let messages = [{ role: 'system', content: SYSTEM_PROMPT }];
if (followup && existsSync(HISTORY_PATH)) {
  messages = JSON.parse(readFileSync(HISTORY_PATH, 'utf8'));
}
messages.push({ role: 'user', content: input });

let res;
try {
  res = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model, messages }),
  });
} catch (err) {
  console.error(`ask-gpt: API に接続できません (${err.cause?.code ?? err.message})`);
  process.exit(3);
}

if (!res.ok) {
  console.error(`ask-gpt: API エラー ${res.status}: ${(await res.text()).slice(0, 500)}`);
  process.exit(3);
}

const data = await res.json();
const answer = data.choices?.[0]?.message?.content ?? '';
messages.push({ role: 'assistant', content: answer });

mkdirSync(dirname(HISTORY_PATH), { recursive: true });
writeFileSync(HISTORY_PATH, JSON.stringify(messages, null, 2));

console.log(answer);
