import { Box, Text, useInput } from 'ink';
import { useEffect, useState } from 'react';
import Version from './components/version.js';

const availableCommands = [
	{ command: '/version', description: 'Show version information' },
	{ command: '/help', description: 'Show this help message' },
	{ command: '/exit', description: 'Exit the application' },
];

export default function App() {
	const [asciiLogo, setAsciiLogo] = useState<string>('');
	const [currentInput, setCurrentInput] = useState<string>('');
	const [isInputMode, setIsInputMode] = useState<boolean>(false);
	const [executedCommand, setExecutedCommand] = useState<string | undefined>(
		undefined,
	);
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	useEffect(() => {
		if (!executedCommand) {
			// Set the ASCII art logo directly
			setAsciiLogo(
				'██╗  ██╗███████╗██╗  ██╗\n██║  ██║██╔════╝╚██╗██╔╝\n███████║█████╗   ╚███╔╝ \n██╔══██║██╔══╝   ██╔██╗ \n██║  ██║███████╗██╔╝ ██╗\n╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝',
			);
		}
	}, [executedCommand]);

	useEffect(() => {
		// Handle exit command as a side effect
		if (executedCommand === '/exit') {
			process.exit(0);
		}
	}, [executedCommand]);

	useEffect(() => {
		if (isInputMode && currentInput.startsWith('/')) {
			const filtered = availableCommands
				.filter((cmd) => cmd.command.startsWith(currentInput))
				.map((cmd) => cmd.command);
			setSuggestions(filtered);
			setSelectedIndex(0);
		} else {
			setSuggestions([]);
			setSelectedIndex(0);
		}
	}, [currentInput, isInputMode]);

	useInput((input, key) => {
		// Handle Escape key when a command is executed to return to main menu
		if (executedCommand && key.escape) {
			setExecutedCommand(undefined);
			return;
		}

		if (!isInputMode && input === '/') {
			setIsInputMode(true);
			setCurrentInput('/');
		} else if (isInputMode) {
			if (key.upArrow) {
				// Up arrow: select previous suggestion
				if (suggestions.length > 0) {
					const prevIndex =
						selectedIndex === 0 ? suggestions.length - 1 : selectedIndex - 1;
					setSelectedIndex(prevIndex);
				}
			} else if (key.downArrow) {
				// Down arrow: select next suggestion
				if (suggestions.length > 0) {
					const nextIndex = (selectedIndex + 1) % suggestions.length;
					setSelectedIndex(nextIndex);
				}
			} else if (key.tab) {
				// Tab key: complete with selected suggestion
				if (suggestions.length > 0 && suggestions[selectedIndex]) {
					setCurrentInput(suggestions[selectedIndex]!);
				}
			} else if (key.escape) {
				setIsInputMode(false);
				setCurrentInput('');
				setSuggestions([]);
				setSelectedIndex(0);
			} else if (key.return) {
				// Execute command
				setExecutedCommand(currentInput);
				setIsInputMode(false);
				setCurrentInput('');
				setSuggestions([]);
				setSelectedIndex(0);
			} else if (key.backspace || key.delete) {
				setCurrentInput((previous) => previous.slice(0, -1));
				if (currentInput.length <= 1) {
					setIsInputMode(false);
					setSuggestions([]);
					setSelectedIndex(0);
				}
			} else if (input && !key.ctrl && !key.meta && !key.tab) {
				setCurrentInput((previous) => previous + input);
			}
		}
	});

	const activeCommand = executedCommand;

	if (activeCommand === '/version') {
		return (
			<Box flexDirection="column">
				<Version />
				<Text color="gray">Press Esc to return</Text>
			</Box>
		);
	}

	if (activeCommand === '/help') {
		return (
			<Box flexDirection="column" paddingY={1}>
				<Box borderStyle="round" paddingX={2} paddingY={1}>
					<Box flexDirection="column" gap={1}>
						<Text bold color="cyan">
							Available Commands:
						</Text>
						<Text color="green">/version - Show version information</Text>
						<Text color="green">/help - Show this help message</Text>
						<Text color="green">/exit - Exit the application</Text>
						<Box marginTop={1}>
							<Text color="gray">Press Esc to return to main menu</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		);
	}

	return (
		<Box flexDirection="column">
			{asciiLogo && (
				<Box marginBottom={1}>
					<Text>{asciiLogo}</Text>
				</Box>
			)}
			{isInputMode && (
				<Box marginTop={1} flexDirection="column">
					<Text color="cyan">› {currentInput}</Text>
					{suggestions.length > 0 && (
						<Box flexDirection="column" marginTop={1}>
							<Text color="gray" dimColor>
								Suggestions (↑↓ to select, Tab to complete):
							</Text>
							{suggestions.map((suggestion, index) => (
								<Text
									key={suggestion}
									color={index === selectedIndex ? 'cyan' : 'gray'}
								>
									{index === selectedIndex ? '▶ ' : '  '}
									{suggestion}
								</Text>
							))}
						</Box>
					)}
				</Box>
			)}
			{!isInputMode && (
				<Box marginTop={1}>
					<Text color="gray">
						Press {'"/'} to enter a command, or type /help for help
					</Text>
				</Box>
			)}
		</Box>
	);
}
