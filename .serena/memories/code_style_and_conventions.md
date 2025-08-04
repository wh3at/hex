# コードスタイルと規約

## TypeScript設定
- `@sindresorhus/tsconfig`を拡張
- 出力ディレクトリ: `dist/`
- ESモジュール使用（`"type": "module"`）

## コードフォーマット
- **インデント**: タブ（.editorconfigで定義）
- **改行コード**: LF
- **文字エンコーディング**: UTF-8
- **末尾の空白**: 削除
- **ファイル末尾**: 改行を挿入
- **YAMLファイル**: スペース2つでインデント

## Prettier設定
- `@vdemedes/prettier-config`を使用
- XOとの互換性を保持

## ESLint/XO設定
- `xo-react`を拡張
- Prettierとの統合有効
- カスタムルール:
  - `react/prop-types`: オフ（TypeScriptの型を使用）
  - `unicorn/expiring-todo-comments`: オフ

## React/Ink規約
- 関数コンポーネントを使用
- TypeScriptの型定義を使用（PropTypesは不要）
- Propsは`readonly`として定義
- エラーハンドリングを実装

## ファイル命名規約
- TypeScriptファイル: `.tsx`（React）、`.ts`（純粋なTypeScript）
- コンポーネント: `components/`ディレクトリに配置
- キャメルケースでファイル名を記述

## インポート規約
- ESモジュール構文を使用
- ローカルインポートには`.js`拡張子を付ける（TypeScriptプロジェクトでも）
- React、Ink、その他の外部ライブラリは最初にインポート

## エラーハンドリング
- try-catchブロックで非同期処理をラップ
- エラーメッセージをユーザーフレンドリーに表示
- unknown型のエラーを適切に処理