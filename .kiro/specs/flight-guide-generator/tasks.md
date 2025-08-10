# Implementation Plan

## Phase 1: プロジェクト基盤構築

- [ ] 1. プロジェクト構造とTypeScript設定のセットアップ
  - source/commands/flight-guide/ディレクトリ構造を作成
  - TypeScriptの型定義ファイル（types.ts）を作成
  - 必要な依存関係をpackage.jsonに追加（sharp, playwright, @stagehand/lib, zod, winston, dotenv）
  - tsconfig.jsonにモジュール解決設定を追加
  - _要件: REQ-6_

- [ ] 2. 基本インターフェースとデータモデルの定義
  - source/commands/flight-guide/types.tsにFlightInfo, GateInfo, ProcessResult, Configインターフェースを実装
  - Zodスキーマによる検証ロジックを追加
  - 各インターフェースのテストケースを作成
  - _要件: REQ-1, REQ-2_

- [ ] 3. 設定管理システムの実装
  - ConfigManagerクラスをsource/commands/flight-guide/services/ConfigManager.tsに実装
  - .hex-flight-guide/config.jsonのデフォルト設定生成ロジック
  - 環境変数読み込みとマージ処理
  - 設定ファイルのバージョニング対応
  - _要件: REQ-6_

## Phase 2: 検証とフィルタリング機能

- [ ] 4. 便名検証サービスの実装
  - FlightCodeValidatorクラスをsource/commands/flight-guide/services/FlightCodeValidator.tsに実装
  - JAL（JL）/ANA（NH）便名形式の検証ロジック
  - バッチ入力の検証メソッド実装
  - 単体テストで様々な便名パターンを検証
  - _要件: REQ-1.1, REQ-1.2, REQ-1.3, REQ-1.4_

- [ ] 5. 航空会社フィルタリングロジックの実装
  - AirlineFilterクラスをsource/commands/flight-guide/services/AirlineFilter.tsに実装
  - JAL/ANA以外の便名をスキップする処理
  - スキップ理由のメッセージ生成
  - 処理対象/スキップのフィルタリング結果を返す
  - _要件: REQ-10.1, REQ-10.2, REQ-10.3, REQ-10.4_

## Phase 3: スクレイピング機能

- [ ] 6. Playwright基盤セットアップとブラウザ管理
  - BrowserManagerクラスをsource/commands/flight-guide/services/BrowserManager.tsに実装
  - ヘッドレスモードのPlaywrightインスタンス管理
  - ブラウザプールとセッション管理
  - タイムアウトとリトライ設定
  - _要件: REQ-8.3, REQ-8.5_

- [ ] 7. JAL搭乗口情報スクレイピング実装
  - GateInfoScraperのJAL戦略をsource/commands/flight-guide/scrapers/JALScraper.tsに実装
  - Stagehandを使用した要素検出ロジック
  - 搭乗口番号とターミナル情報の抽出
  - エラーハンドリングと搭乗口未定の処理
  - _要件: REQ-2.1, REQ-2.3, REQ-2.4_

- [ ] 8. ANA搭乗口情報スクレイピング実装
  - GateInfoScraperのANA戦略をsource/commands/flight-guide/scrapers/ANAScraper.tsに実装
  - ANAサイト固有のセレクタ設定
  - 搭乗口情報の正規化処理
  - ネットワークエラー時のリトライ実装（最大3回）
  - _要件: REQ-2.1, REQ-2.5, REQ-2.6_

- [ ] 9. スクリーンショット撮影機能
  - ScreenshotCaptureクラスをsource/commands/flight-guide/services/ScreenshotCapture.tsに実装
  - 搭乗口情報部分の選択的キャプチャ
  - フォールバック処理（全画面スクリーンショット）
  - 一時ファイルへの保存処理
  - _要件: REQ-3.1, REQ-3.2, REQ-3.3, REQ-3.4_

## Phase 4: 画像処理機能

- [ ] 10. ターミナル画像管理システム
  - TerminalMapLoaderをsource/commands/flight-guide/services/TerminalMapLoader.tsに実装
  - ターミナル1/2/3の画像読み込みとキャッシュ
  - 画像ファイルの存在確認と検証
  - メモリ効率的なキャッシュ管理
  - _要件: REQ-4.1, REQ-4.2_

- [ ] 11. Sharp画像合成エンジンの実装
  - ImageComposerクラスをsource/commands/flight-guide/services/ImageComposer.tsに実装
  - スクリーンショットとターミナル画像の合成
  - 搭乗口位置のマーキング処理
  - SVGによるテキストオーバーレイ（便名、搭乗口、時刻）
  - _要件: REQ-4.3, REQ-4.4_

- [ ] 12. 画像最適化と品質管理
  - 出力画像の品質設定（1-100）
  - PNG/JPEG形式の選択可能な出力
  - ファイルサイズ最適化処理
  - エラー時の元画像保持
  - _要件: REQ-4.5, REQ-6.2_

## Phase 5: ファイル管理とバッチ処理

- [ ] 13. ファイル管理システムの実装
  - FileManagerクラスをsource/commands/flight-guide/services/FileManager.tsに実装
  - 日付/便名形式のファイルパス生成（YYYY-MM-DD/JLXXX_HHMM.png）
  - 重複ファイルの確認と上書き処理
  - 出力ディレクトリの自動作成
  - _要件: REQ-5.1, REQ-5.2, REQ-5.3_

- [ ] 14. バッチ処理コーディネーター
  - BatchProcessorクラスをsource/commands/flight-guide/services/BatchProcessor.tsに実装
  - 最大5便の並列処理管理
  - 個別エラーの分離処理
  - 処理進捗のトラッキング
  - _要件: REQ-1.2, REQ-1.6, REQ-8.4_

## Phase 6: UIコンポーネントとCLI統合

- [ ] 15. Ink UIコンポーネントの実装
  - source/commands/flight-guide/components/に以下を実装:
    - BatchInput.tsx: 便名入力インターフェース
    - ProgressBar.tsx: バッチ処理進捗表示（ink-progress-bar使用）
    - FlightStatus.tsx: 個別便処理状態表示
    - ResultSummary.tsx: 処理結果サマリー表示
    - ErrorDisplay.tsx: エラー詳細とサジェスチョン表示
  - _要件: REQ-9.1, REQ-9.4, REQ-9.5_

- [ ] 16. CLIコマンドハンドラーの実装
  - FlightGuideCommandをsource/commands/flight-guide/index.tsxに実装
  - Meowによるコマンドライン引数パース
  - --output, --config, --batch, --parallelオプション処理
  - ヘルプメッセージとバージョン表示
  - _要件: REQ-9.1, REQ-9.2, REQ-9.3_

## Phase 7: エラーハンドリングとロギング

- [ ] 17. 統合エラーハンドリングシステム
  - ErrorHandlerクラスをsource/commands/flight-guide/services/ErrorHandler.tsに実装
  - エラータイプ別の処理ロジック（VALIDATION_ERROR, NETWORK_ERROR等）
  - ユーザーフレンドリーなエラーメッセージ生成
  - リトライ可能性の判定と自動リトライ
  - _要件: REQ-7.1, REQ-7.2, REQ-7.4_

- [ ] 18. 構造化ロギングシステム
  - LoggerServiceをsource/commands/flight-guide/services/Logger.tsに実装
  - Winston/Pinoによる構造化ログ出力
  - タイムスタンプ付きログファイル生成
  - デバッグモードの詳細ログ出力
  - _要件: REQ-7.1, REQ-7.3, REQ-7.5_

## Phase 8: 統合とテスト

- [ ] 19. メインアプリケーション統合
  - source/app.tsxにフライトガイドコマンドを統合
  - コマンドルーティングの追加（/flight-guide）
  - 既存のHEXコマンドシステムとの連携
  - 設定ファイルの初期化処理
  - _要件: REQ-6.1, REQ-6.4_

- [ ] 20. 統合テストとE2Eテストの実装
  - test/flight-guide/にテストスイートを作成:
    - unit/: 各サービスクラスの単体テスト
    - integration/: コンポーネント間の統合テスト
    - e2e/: モックサーバーを使用したE2Eテスト
  - AVAテストランナーの設定
  - ink-testing-libraryによるUIコンポーネントテスト
  - _要件: REQ-8.1, REQ-8.2_

- [ ] 21. パフォーマンス最適化とメモリ管理
  - メモリリーク検証とリソース解放処理
  - 並列処理の負荷テスト（10便同時処理）
  - 30秒タイムアウトの実装と進捗表示
  - キャッシュ戦略の実装（ターミナル画像、搭乗口情報）
  - _要件: REQ-8.1, REQ-8.2, REQ-8.5_

---

## タスク実行順序と依存関係

1. **Phase 1-2（基盤）**: タスク1-5を順次実行
2. **Phase 3（スクレイピング）**: タスク6-9を順次実行（6→7,8→9）
3. **Phase 4（画像処理）**: タスク10-12を順次実行
4. **Phase 5（ファイル管理）**: タスク13-14を並行実行可能
5. **Phase 6（UI）**: タスク15-16を順次実行
6. **Phase 7（エラー処理）**: タスク17-18を並行実行可能
7. **Phase 8（統合）**: タスク19-21を順次実行

## 実装完了条件

- [ ] 全21タスクの完了
- [ ] 単体テストカバレッジ85%以上
- [ ] E2Eテストによる主要フロー検証
- [ ] 10便バッチ処理が60秒以内で完了
- [ ] エラー時の適切なフォールバック動作確認