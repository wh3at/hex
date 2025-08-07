# プロジェクト概要

## プロジェクト名

hex - ASCII アートロゴジェネレーター CLI ツール

## 目的

oh-my-logo ライブラリを使用してカスタマイズ可能な ASCII アートロゴを生成し、ターミナルに表示する CLI アプリケーション。

## 技術スタック

- **言語**: TypeScript
- **フレームワーク**:
  - Ink (React for CLI)
  - React 18
- **主要ライブラリ**:
  - meow: CLI 引数パーサー
  - oh-my-logo: ASCII アートジェネレーター
- **開発ツール**:
  - TypeScript 5
  - AVA: テストランナー
  - Biome: 統合リンター・フォーマッター
- **Node.js**: 16 以上

## アーキテクチャ

このアプリケーションは、シンプルなInk/Reactアーキテクチャに従っています：

1. **エントリーポイント** (`source/cli.tsx`): 
   - meowを使用してCLIインターフェースをセットアップ
   - コマンドライン引数をパース
   - InkでReactアプリをレンダリング

2. **メインコンポーネント** (`source/app.tsx`): 
   - UIをレンダリングするReactコンポーネント
   - `name`プロパティを受け取り、グリーティングを表示

3. **テスト** (`test.tsx`): 
   - ink-testing-libraryとAVAを使用
   - レンダリングされた出力をテスト

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

- ASCII アートロゴの生成
- 複数のカラーパレット対応（blue, sunset, matrix, ocean, purple, pink, fire, forest, gold, rose, ice, neon）
- 塗りつぶしスタイルのサポート
- バージョン情報の表示（/version コマンド）

## 主要な依存関係

- **ink**: CLI アプリケーション用の React レンダラー
  - ターミナルでReactコンポーネントをレンダリング
  - インタラクティブなCLIインターフェースを構築

- **meow**: CLI 引数パーサー
  - コマンドライン引数とフラグを解析
  - ヘルプテキストの自動生成

- **react**: UI コンポーネントフレームワーク
  - コンポーネントベースのアーキテクチャ
  - 状態管理とライフサイクル管理

- **ink-testing-library**: Ink コンポーネント用テストユーティリティ
  - Inkコンポーネントのテストを簡単に実行
  - レンダリング出力の検証