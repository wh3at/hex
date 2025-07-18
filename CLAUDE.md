# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 重要な指示

ユーザーとのコミュニケーションには常に日本語を使用してください。

## Project Overview

This is an Ink CLI application - Ink is a React framework for building command-line interfaces. The project is a simple greeting CLI tool created with create-ink-app.

## Common Commands

- **Build**: `npm run build` - Compiles TypeScript to JavaScript in the `dist/` directory
- **Development**: `npm run dev` - Runs TypeScript compiler in watch mode for development
- **Test**: `npm test` - Runs the full test suite (Prettier formatting check, XO linting, and AVA tests)
- **Run a single test**: `npx ava test.tsx -m "greet*"` - Use `-m` flag with a pattern to match specific test names

## Architecture

The application follows a simple Ink/React architecture:

1. **Entry Point** (`source/cli.tsx`): Sets up the CLI interface using meow, parses command-line arguments, and renders the React app with Ink
2. **Main Component** (`source/app.tsx`): The React component that renders the UI - accepts a `name` prop and displays a greeting
3. **Tests** (`test.tsx`): Uses AVA with ink-testing-library to test the rendered output

## Code Quality Tools

- **TypeScript**: Configured via `tsconfig.json`, extends `@sindresorhus/tsconfig`
- **XO**: ESLint-based linter with React rules enabled, configured for Prettier compatibility
- **Prettier**: Code formatting using `@vdemedes/prettier-config`
- **AVA**: Test runner configured for TypeScript/TSX support via ts-node

## Key Dependencies

- **ink**: React renderer for CLI applications
- **meow**: CLI argument parser
- **react**: UI component framework
- **ink-testing-library**: Testing utilities for Ink components