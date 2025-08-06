# hex

Interactive CLI automation workflow tool with ASCII art branding.

## Features

- 🎨 ASCII art logo display
- ⌨️ Interactive command mode
- 🚀 Built with React for CLI (Ink framework)
- 🔧 TypeScript support
- 🎭 Automation capabilities with Stagehand and Playwright

## Install

### Using npm

```bash
$ npm install --global hex
```

### Using Bun (Recommended)

```bash
$ bun install
```

## Usage

Start the application:

```bash
$ hex
```

Once the application starts, you'll see the HEX ASCII logo. Press `/` to enter command mode.

### Available Commands

- `/version` - Show version information
- `/help` - Display help message with available commands

### Controls

- `/` - Enter command mode
- `Enter` - Execute command
- `ESC` - Cancel command input
- `Backspace` - Delete characters

## Development

### Prerequisites

- Node.js >= 16 or Bun >= 1.0.0
- TypeScript

### Build

```bash
# Using Bun
$ bun run build

# Using npm
$ npm run build
```

### Development Mode

Run TypeScript compiler in watch mode:

```bash
# Using Bun
$ bun run dev

# Using npm
$ npm run dev
```

### Run Application

```bash
# Using Bun
$ bun run start      # Build and run
$ bun run start:dev  # Run from source

# Using npm
$ npm run build && node dist/cli.js
```

### Testing

Run the full test suite:

```bash
# Using Bun
$ bun test

# Using npm
$ npm test
```

### Code Quality

Lint and format code using Biome:

```bash
# Lint only
$ bun run lint

# Format code
$ bun run format

# Lint and format
$ bun run check
```

## Tech Stack

- **UI Framework**: [Ink](https://github.com/vadimdemedes/ink) - React for CLI
- **Runtime**: Node.js (>=16) or [Bun](https://bun.sh) (>=1.0.0)
- **Language**: TypeScript
- **Linter/Formatter**: [Biome](https://biomejs.dev)
- **Test Runner**: [AVA](https://github.com/avajs/ava)
- **CLI Parser**: [Meow](https://github.com/sindresorhus/meow)
- **Automation**: [Stagehand](https://github.com/browserbase/stagehand) + [Playwright](https://playwright.dev)
- **Validation**: [Zod](https://github.com/colinhacks/zod)
- **Environment Variables**: [dotenv](https://github.com/motdotla/dotenv)

## Project Structure

```
hex/
├── source/
│   ├── cli.tsx          # Entry point
│   ├── app.tsx          # Main React component
│   └── components/      # Reusable components
│       └── version.tsx  # Version display component
├── dist/                # Compiled JavaScript (generated)
├── test.tsx             # Test suite
└── package.json         # Project configuration
```

## License

MIT