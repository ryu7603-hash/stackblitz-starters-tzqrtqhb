#!/usr/bin/env node
// 停滞している作業について GPT に相談する。
// 使い方: node ask-gpt.mjs [--followup] < briefing.md
//   --followup  前回の協議履歴を引き継いで再質問する
// 環境変数:
//   WATCH_GPT=dot    ローカル GPT「Dot」を使う（dot-server.mjs で起動したサーバーに接続。DOT_PORT 省略時 8089）
//   OPENAI_BASE_URL  ローカル GPT の OpenAI 互換エンドポイント（例 Ollama: http://localhost:11434/v1,
//                    LM Studio: http://localhost:1234/v1）。省略時は https://api.openai.com/v1
//   OPENAI_API_KEY   OpenAI 本家を使うときは必須。ローカル GPT では不要
//   OPENAI_MODEL     使うモデル名（ローカルでは必須。例 gpt-oss:20b）。本家で省略時は gpt-4o
// 終了コード: 0 成功 / 1 入力なし / 2 設定不足 / 3 API 呼び出し失敗

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
const useDot = process.env.WATCH_GPT === 'dot';
const apiKey = useDot ? undefined : process.env.OPENAI_API_KEY;
const isLocal = useDot || Boolean(process.env.OPENAI_BASE_URL);
const model = useDot ? 'dot' : process.env.OPENAI_MODEL || (isLocal ? '' : 'gpt-4o');
const baseUrl = (
  useDot
    ? `http://127.0.0.1:${process.env.DOT_PORT || '8089'}/v1`
    : process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1'
).replace(/\/$/, '');

const input = readFileSync(0, 'utf8').trim();
if (!input) {
  console.error('ask-gpt: 標準入力に相談内容を渡してください');
  process.exit(1);
}
if (!isLocal && !apiKey) {
  console.error('ask-gpt: OPENAI_BASE_URL（ローカル GPT）も OPENAI_API_KEY も未設定です。GPT 協議をスキップしてください');
  process.exit(2);
}
if (!model) {
  console.error('ask-gpt: ローカル GPT を使うときは OPENAI_MODEL にモデル名を指定してください');
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
    headers: {
      'Content-Type': 'application/json',
      ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
    },
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
