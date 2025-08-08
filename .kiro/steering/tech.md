# Technology Stack

## Architecture

**Type**: Command-Line Interface (CLI) Application  
**Architecture Pattern**: Component-based React architecture adapted for terminal UI  
**Execution Model**: Single-process interactive application with async command handling  

## Core Technologies

### Runtime Environment
- **Primary**: Bun (>=1.0.0) - Recommended for optimal performance
- **Alternative**: Node.js (>=16) - Broad compatibility support
- **Module System**: ESM (ES Modules) - Modern JavaScript module system

### Language & Type System
- **Language**: TypeScript 5.0.3+
- **Config**: Extends @sindresorhus/tsconfig for best practices
- **JSX**: React JSX for component rendering
- **Target**: ES2020+ features

### UI Framework
- **Framework**: Ink 4.1.0 - React for building CLI apps
- **Components**: React 18.2.0 components adapted for terminal
- **State Management**: React hooks and context
- **Rendering**: Terminal-based virtual DOM

### Build & Development Tools
- **Compiler**: TypeScript Compiler (tsc)
- **Linter/Formatter**: Biome 2.1.3 - Fast, unified toolchain
- **Package Manager**: Bun (preferred) or npm
- **Watch Mode**: tsc --watch for development

### Testing & Quality
- **Test Runner**: AVA 5.2.0 - Concurrent test execution
- **Test Library**: ink-testing-library 3.0.0 - Testing Ink components
- **Test Timeout**: 60 seconds per test
- **Test Requirements**: ts-node for TypeScript test execution

### Key Dependencies
- **CLI Parser**: Meow 11.0.0 - Command-line argument parsing
- **Browser Automation**: Playwright 1.54.2 + Stagehand 2.4.2
- **Validation**: Zod 3.25.76 - Runtime type validation
- **Environment**: dotenv 16.4.5 - Environment variable management
- **Utilities**: Chalk 5.2.0 - Terminal string styling

## Development Environment

### Required Tools
- Bun 1.0.0+ or Node.js 16+
- TypeScript 5.0.3+
- Git for version control

### Environment Variables
```bash
# Loaded via dotenv from .env file
# Add project-specific environment variables here
```

### Port Configuration
- No server ports required (CLI application)
- Playwright may use dynamic ports for browser automation

## Common Commands

### Development
```bash
# Start development mode with auto-reload
bun run dev          # TypeScript watch mode
bun run start:dev    # Run from source directly

# Build for production
bun run build        # Compile TypeScript to JavaScript
```

### Quality Checks
```bash
# Run all tests and checks
bun test             # Runs Biome checks + AVA tests

# Individual quality commands
bun run lint         # Lint code with Biome
bun run format       # Format code with Biome
bun run check        # Lint and format with Biome
```

### Running the Application
```bash
# Production mode
bun run start        # Build and run
hex                  # Run globally installed version

# Development mode
bun run start:dev    # Run TypeScript directly
bun source/cli.tsx   # Direct execution
```

## Build Output

- **Output Directory**: `dist/`
- **Entry Point**: `dist/cli.js`
- **Source Maps**: Generated for debugging
- **Module Format**: ES Modules (ESM)

## Performance Considerations

- **Bun Runtime**: ~4x faster startup than Node.js
- **TypeScript**: Compiled to optimized JavaScript
- **Ink Rendering**: Efficient terminal rendering with minimal flicker
- **AVA Testing**: Parallel test execution for speed