# コードスタイルと規約

## TypeScript 設定

- `@sindresorhus/tsconfig`を拡張
- 出力ディレクトリ: `dist/`
- ES モジュール使用（`"type": "module"`）

## コード品質ツール

### TypeScript
- **設定**: `tsconfig.json`で設定、`@sindresorhus/tsconfig`を拡張
- **目的**: 静的型チェックとトランスパイル
- **ビルド出力**: `dist/`ディレクトリ

### Biome
- **役割**: ESLintとPrettierを置き換えるモダンなリンター・フォーマッター
- **設定**: `biome.json`で設定
- **統合機能**: コードフォーマットとリンティングを一つのツールで実行

### AVA
- **役割**: テストランナー
- **特徴**: ts-nodeによるTypeScript/TSXサポート
- **用途**: ユニットテストと統合テストの実行

## コードフォーマット

- **インデント**: タブ（.editorconfig で定義）
- **改行コード**: LF
- **文字エンコーディング**: UTF-8
- **末尾の空白**: 削除
- **ファイル末尾**: 改行を挿入
- **YAML ファイル**: スペース 2 つでインデント

## Biome 設定詳細

- 統合されたリンター・フォーマッター
- インデントスタイル: タブ
- インデント幅: 2
- 引用符: シングルクォート（JavaScript）
- セミコロン: 必須
- 末尾カンマ: すべて
- JSX引用符: ダブルクォート
- 行幅: 80
- カスタムルール:
  - `noForEach`: オフ
  - `useImportType`: オフ
  - `noNonNullAssertion`: オフ
  - `noExplicitAny`: オフ

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