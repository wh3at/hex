# 開発時に使用するコマンド

## ビルドとコンパイル

- `npm run build` - TypeScript を JavaScript にコンパイル（dist/ディレクトリに出力）
- `npm run dev` - TypeScript コンパイラーを監視モードで実行（開発時）

## テストとコード品質

- `npm test` - フルテストスイートを実行（Biome + AVA）
- `npx biome check .` - Biome によるコードフォーマットとリンティングチェック
- `npx biome check . --write` - 自動修正可能な問題を修正
- `npx biome format .` - コードフォーマットのみ実行
- `npx biome lint .` - リンティングのみ実行
- `npx ava` - すべてのテストを実行
- `npx ava test.tsx -m "greet*"` - 特定のテストパターンにマッチするテストのみ実行

## 実行

- `npm start` - アプリケーションを実行
- `node dist/cli.js` - ビルド後のアプリケーションを実行

## インタラクティブモードのコマンド

- `/` - コマンド入力モードに入る
- `/version` - バージョン情報を表示
- `/help` - ヘルプメッセージを表示
- Tab - 次の補完候補を選択
- Shift+Tab - 前の補完候補を選択
- Enter - コマンドまたは補完を確定
- Escape - 入力をキャンセル

## Git 操作

- `git status` - 変更状況を確認
- `git diff` - 変更内容を確認
- `git add .` - すべての変更をステージング
- `git commit -m "メッセージ"` - コミット

## システムコマンド（Linux）

- `ls -la` - ファイル一覧（隠しファイル含む）
- `cd <directory>` - ディレクトリ移動
- `grep -r "pattern" .` - パターン検索
- `find . -name "*.tsx"` - ファイル検索