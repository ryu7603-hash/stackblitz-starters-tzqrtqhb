#!/usr/bin/env node
// ローカル GPT「Dot」(github.com/alexpinel/Dot) のモデルを OpenAI 互換 API として公開する。
// Dot 本体は外部 API を持たず、GGUF モデルをアプリ内で直接動かしている。
// そこで同じ GGUF を llama.cpp の llama-server で起動し、ask-gpt.mjs から呼べるようにする。
//
// 使い方: node dot-server.mjs [--print]
//   --print  見つけたモデルのパスを表示するだけで、サーバーは起動しない
// 環境変数:
//   DOT_MODEL_PATH  モデルファイルを直接指定（省略時は Dot の設定と Dot-Data フォルダから探す）
//   DOT_PORT        待ち受けポート（省略時 8089）
//   LLAMA_SERVER    llama-server の実行ファイル（省略時 PATH 上の llama-server）
// 前提: llama.cpp をインストールしておく（macOS: brew install llama.cpp / Windows: winget install llama.cpp）

import { spawn } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { homedir, platform } from 'node:os';
import { join } from 'node:path';

const port = process.env.DOT_PORT || '8089';

// Dot の設定ファイル（Electron の userData/config.json）。設定画面で選んだモデルが ggufFilePath に入る
function dotConfigPath() {
  const home = homedir();
  if (platform() === 'darwin') return join(home, 'Library/Application Support/Dot/config.json');
  if (platform() === 'win32') return join(process.env.APPDATA || join(home, 'AppData/Roaming'), 'Dot/config.json');
  return join(process.env.XDG_CONFIG_HOME || join(home, '.config'), 'Dot/config.json');
}

function findModel() {
  if (process.env.DOT_MODEL_PATH) return process.env.DOT_MODEL_PATH;

  const configPath = dotConfigPath();
  if (existsSync(configPath)) {
    const { ggufFilePath } = JSON.parse(readFileSync(configPath, 'utf8'));
    if (ggufFilePath && existsSync(ggufFilePath)) return ggufFilePath;
  }

  // Dot が既定モデルをダウンロードする場所: <書類>/Dot-Data
  const dataDir = join(homedir(), 'Documents', 'Dot-Data');
  if (existsSync(dataDir)) {
    const ggufs = readdirSync(dataDir).filter((f) => f.endsWith('.gguf'));
    const preferred = ggufs.find((f) => f.startsWith('Phi-3.5')) || ggufs[0];
    if (preferred) return join(dataDir, preferred);
  }
  return null;
}

const modelPath = findModel();
if (!modelPath || !existsSync(modelPath)) {
  console.error('dot-server: Dot のモデル (.gguf) が見つかりません。DOT_MODEL_PATH で指定してください');
  process.exit(2);
}

if (process.argv.includes('--print')) {
  console.log(modelPath);
  process.exit(0);
}

console.error(`dot-server: ${modelPath} を http://127.0.0.1:${port}/v1 で起動します`);
console.error('dot-server: 別のターミナルで WATCH_GPT=dot を設定すると ask-gpt.mjs がこのサーバーを使います');

const server = spawn(
  process.env.LLAMA_SERVER || 'llama-server',
  ['-m', modelPath, '--host', '127.0.0.1', '--port', port, '--alias', 'dot'],
  { stdio: 'inherit' },
);
server.on('error', (err) => {
  console.error(`dot-server: llama-server を起動できません (${err.code}). llama.cpp をインストールしてください`);
  process.exit(3);
});
server.on('exit', (code) => process.exit(code ?? 0));
