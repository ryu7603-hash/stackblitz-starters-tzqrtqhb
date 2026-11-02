# AIの「プロ回答」設定（ChatGPT / Gemini / Claude）

AIは何も設定しないと、当たり障りのない一般論を返しがちです。
このフォルダには、3つのAIが同じ「プロの答え方の型」で答えるようにするための設定一式が入っています。

## ファイル

| ファイル | 中身 |
| --- | --- |
| [`pro-answer-standard.md`](./pro-answer-standard.md) | **正本**。プロ回答の型の全文。変更はまずここから |
| [`chatgpt.md`](./chatgpt.md) | ChatGPT のカスタム指示に貼る文章と貼る場所 |
| [`gemini.md`](./gemini.md) | Gemini の Gem に貼る文章と作り方 |
| [`claude.md`](./claude.md) | Claude の個人設定に貼る文章と貼る場所 |
| [`test-prompts.md`](./test-prompts.md) | 設定が効いているか確かめるテスト質問と採点表 |

## 手順

1. `chatgpt.md` / `gemini.md` / `claude.md` を開き、コードブロックの中身をそれぞれのAIの設定画面に貼る
2. `test-prompts.md` の質問を3つのAIに投げて採点する
3. 気になる答えがあったら、どこがダメだったかを Claude Code に伝える → 正本と3つの設定文をまとめて直す

## 型を直すときのルール

- まず `pro-answer-standard.md` を直す
- 次に `chatgpt.md` / `gemini.md` / `claude.md` に同じ変更を反映する（3つの中身がズレないようにする）
- ChatGPT の2つの欄は、それぞれ1,500文字以内に収める
