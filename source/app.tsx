import React, {useEffect, useState} from 'react';
import {Text, Box, useInput} from 'ink';
import Version from './components/version.js';

export default function App() {
	const [asciiLogo, setAsciiLogo] = useState<string>('');
	const [currentInput, setCurrentInput] = useState<string>('');
	const [isInputMode, setIsInputMode] = useState<boolean>(false);
	const [executedCommand, setExecutedCommand] = useState<string | undefined>(
		undefined,
	);

	useEffect(() => {
		if (!executedCommand) {
			// Set the ASCII art logo directly
			setAsciiLogo(
				'██╗  ██╗███████╗██╗  ██╗\n██║  ██║██╔════╝╚██╗██╔╝\n███████║█████╗   ╚███╔╝ \n██╔══██║██╔══╝   ██╔██╗ \n██║  ██║███████╗██╔╝ ██╗\n╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝',
			);
		}
	}, [executedCommand]);

	useInput((input, key) => {
		if (!isInputMode && input === '/') {
			setIsInputMode(true);
			setCurrentInput('/');
		} else if (isInputMode) {
			if (key.escape) {
				setIsInputMode(false);
				setCurrentInput('');
			} else if (key.return) {
				// Execute command
				setExecutedCommand(currentInput);
				setIsInputMode(false);
				setCurrentInput('');
			} else if (key.backspace || key.delete) {
				setCurrentInput(previous => previous.slice(0, -1));
				if (currentInput.length <= 1) {
					setIsInputMode(false);
				}
			} else if (input && !key.ctrl && !key.meta) {
				setCurrentInput(previous => previous + input);
			}
		}
	});

	const activeCommand = executedCommand;

	if (activeCommand === '/version') {
		return (
			<Box flexDirection="column">
				<Version />
				<Text color="gray">Press {'"/"'} to enter a command</Text>
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
						<Box marginTop={1}>
							<Text color="gray">Press {'"/"'} to start typing a command</Text>
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
				<Box marginTop={1}>
					<Text color="cyan">› {currentInput}</Text>
				</Box>
			)}
			{!isInputMode && (
				<Box marginTop={1}>
					<Text color="gray">
						Press {'"/"'} to enter a command, or type /help for help
					</Text>
				</Box>
			)}
		</Box>
	);
}
