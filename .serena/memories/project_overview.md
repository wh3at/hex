# プロジェクト概要

## プロジェクト名
hex - ASCIIアートロゴジェネレーターCLIツール

## 目的
oh-my-logoライブラリを使用してカスタマイズ可能なASCIIアートロゴを生成し、ターミナルに表示するCLIアプリケーション。

## 技術スタック
- **言語**: TypeScript
- **フレームワーク**: 
  - Ink (React for CLI)
  - React 18
- **主要ライブラリ**:
  - meow: CLI引数パーサー
  - oh-my-logo: ASCIIアートジェネレーター
- **開発ツール**:
  - TypeScript 5
  - AVA: テストランナー
  - XO: ESLintベースのリンター
  - Prettier: コードフォーマッター
- **Node.js**: 16以上

## プロジェクト構造
```
/
├── source/
│   ├── cli.tsx         # CLIエントリーポイント
│   ├── app.tsx         # メインReactコンポーネント
│   └── components/
│       └── version.tsx # バージョン情報コンポーネント
├── test.tsx           # AVAテスト
├── package.json       # 依存関係とスクリプト
├── tsconfig.json      # TypeScript設定
└── CLAUDE.md          # Claudeへの指示書
```

## 主な機能
- ASCIIアートロゴの生成
- 複数のカラーパレット対応（blue, sunset, matrix, ocean, purple, pink, fire, forest, gold, rose, ice, neon）
- 塗りつぶしスタイルのサポート
- バージョン情報の表示（/versionコマンド）