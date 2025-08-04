# 開発時に使用するコマンド

## ビルドとコンパイル
- `npm run build` - TypeScriptをJavaScriptにコンパイル（dist/ディレクトリに出力）
- `npm run dev` - TypeScriptコンパイラーを監視モードで実行（開発時）

## テストとコード品質
- `npm test` - フルテストスイートを実行（Prettier、XO、AVA）
- `npx prettier --check .` - コードフォーマットのチェック
- `npx xo` - ESLintベースのリンティング
- `npx ava` - すべてのテストを実行
- `npx ava test.tsx -m "greet*"` - 特定のテストパターンにマッチするテストのみ実行

## 実行
- `npm start -- --logo="TEXT"` - 開発中のアプリケーションを実行
- `node dist/cli.js --logo="TEXT"` - ビルド後のアプリケーションを実行

## CLIオプション
```bash
# 基本的な使用方法
hex --logo="HELLO" --palette=sunset

# 塗りつぶしスタイルで表示
hex --logo="CODE" --palette=matrix --is-filled

# バージョン情報を表示
hex /version
```

## Git操作
- `git status` - 変更状況を確認
- `git diff` - 変更内容を確認
- `git add .` - すべての変更をステージング
- `git commit -m "メッセージ"` - コミット

## システムコマンド（Linux）
- `ls -la` - ファイル一覧（隠しファイル含む）
- `cd <directory>` - ディレクトリ移動
- `grep -r "pattern" .` - パターン検索
- `find . -name "*.tsx"` - ファイル検索