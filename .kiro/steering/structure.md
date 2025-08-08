# Project Structure

## Root Directory Organization

```
hex/
├── source/              # TypeScript source code
├── dist/                # Compiled JavaScript output (gitignored)
├── .kiro/               # Kiro spec-driven development
│   ├── steering/        # Project steering documents
│   └── specs/           # Feature specifications
├── .claude/             # Claude Code custom commands
│   └── commands/        # Command definitions
├── .serena/             # Serena tool memories
│   └── memories/        # Project knowledge base
├── node_modules/        # Dependencies (gitignored)
├── test.js              # Test file
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
├── README.md            # Project documentation
├── CLAUDE.md            # Claude Code instructions
└── .env                 # Environment variables (gitignored)
```

## Subdirectory Structures

### Source Code (`source/`)
```
source/
├── cli.tsx              # Entry point - CLI initialization and meow setup
├── app.tsx              # Main application component - UI orchestration
└── components/          # Reusable React components
    └── version.tsx      # Version display component
```

**Purpose**: Contains all TypeScript/React source code for the application

### Build Output (`dist/`)
```
dist/
├── cli.js               # Compiled entry point (executable)
├── app.js               # Compiled main application
└── components/          # Compiled components
    └── version.js       # Compiled version component
```

**Purpose**: Auto-generated JavaScript output from TypeScript compilation

### Kiro Development (`.kiro/`)
```
.kiro/
├── steering/            # Project-wide guidance
│   ├── product.md       # Product overview and vision
│   ├── tech.md          # Technology decisions
│   └── structure.md     # This file - project organization
└── specs/               # Feature specifications
    └── [feature-name]/  # Individual feature specs
        ├── requirements.md
        ├── design.md
        └── tasks.md
```

**Purpose**: Spec-driven development artifacts and project steering

### Claude Commands (`.claude/commands/`)
```
.claude/commands/
├── README.md            # Command documentation
├── commit.md            # Git commit automation
├── test-generate.md     # Test generation
├── architect.md         # Architecture planning
└── [other-commands].md  # Various automation commands
```

**Purpose**: Custom Claude Code command definitions for workflow automation

## Code Organization Patterns

### Component Structure
- **Container Components**: Located in `app.tsx`, manage state and logic
- **Presentational Components**: In `components/`, pure UI rendering
- **Entry Point**: `cli.tsx` handles CLI arguments and bootstrapping

### File Naming Conventions
- **Components**: PascalCase with `.tsx` extension (e.g., `Version.tsx`)
- **Entry Points**: lowercase with `.tsx` extension (e.g., `cli.tsx`)
- **Tests**: Same name as source file with `.test.` infix
- **Config Files**: lowercase with appropriate extension (e.g., `tsconfig.json`)

### Import Organization
```typescript
// 1. External dependencies
import React from 'react';
import { render } from 'ink';

// 2. Internal components
import App from './app.js';

// 3. Types and interfaces
import type { AppProps } from './types.js';

// 4. Utilities and helpers
import { parseArgs } from './utils.js';
```

## Key Architectural Principles

### Separation of Concerns
- **CLI Layer**: Handles argument parsing and process management (`cli.tsx`)
- **Application Layer**: Manages UI state and user interaction (`app.tsx`)
- **Component Layer**: Reusable UI elements (`components/`)

### React for CLI Pattern
- Use Ink's React components for terminal UI
- Leverage React hooks for state management
- Component composition over inheritance
- Functional components with TypeScript

### Build Pipeline
1. **Source**: TypeScript + JSX in `source/`
2. **Compile**: tsc transforms to JavaScript in `dist/`
3. **Execute**: Node.js/Bun runs compiled `dist/cli.js`

### Testing Strategy
- Unit tests for individual components
- Integration tests for command flows
- Use ink-testing-library for component testing
- AVA for test execution with TypeScript support

### Module System
- ES Modules (ESM) throughout the project
- Use `.js` extensions in imports (even for `.tsx` files)
- No CommonJS compatibility needed

### Environment Management
- Use dotenv for environment variables
- Keep sensitive config in `.env` (gitignored)
- Document required variables in steering files

## File Categories

### Source Files
- `*.tsx` - React components and entry points
- `*.ts` - Pure TypeScript modules

### Configuration
- `package.json` - Project metadata and scripts
- `tsconfig.json` - TypeScript compiler options
- `.env` - Environment variables

### Documentation
- `README.md` - User-facing documentation
- `CLAUDE.md` - AI assistant instructions
- `.kiro/steering/*.md` - Development guidance

### Generated Files (Gitignored)
- `dist/` - Compiled JavaScript
- `node_modules/` - Dependencies
- `*.log` - Log files