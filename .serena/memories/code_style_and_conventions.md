# コードスタイルと規約

## TypeScript 設定

- `@sindresorhus/tsconfig`を拡張
- 出力ディレクトリ: `dist/`
- ES モジュール使用（`"type": "module"`）

## コードフォーマット

- **インデント**: タブ（.editorconfig で定義）
- **改行コード**: LF
- **文字エンコーディング**: UTF-8
- **末尾の空白**: 削除
- **ファイル末尾**: 改行を挿入
- **YAML ファイル**: スペース 2 つでインデント

## Prettier 設定

- `@vdemedes/prettier-config`を使用
- XO との互換性を保持

## ESLint/XO 設定

- `xo-react`を拡張
- Prettier との統合有効
- カスタムルール:
  - `react/prop-types`: オフ（TypeScript の型を使用）
  - `unicorn/expiring-todo-comments`: オフ

## React/Ink 規約

- 関数コンポーネントを使用
- TypeScript の型定義を使用（PropTypes は不要）
- Props は`readonly`として定義
- エラーハンドリングを実装

## ファイル命名規約

- TypeScript ファイル: `.tsx`（React）、`.ts`（純粋な TypeScript）
- コンポーネント: `components/`ディレクトリに配置
- キャメルケースでファイル名を記述

## インポート規約

- ES モジュール構文を使用
- ローカルインポートには`.js`拡張子を付ける（TypeScript プロジェクトでも）
- React、Ink、その他の外部ライブラリは最初にインポート

## エラーハンドリング

- try-catch ブロックで非同期処理をラップ
- エラーメッセージをユーザーフレンドリーに表示
- unknown 型のエラーを適切に処理
