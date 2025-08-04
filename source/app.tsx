import React, {useEffect, useState} from 'react';
import {Text, Box} from 'ink';
import Version from './components/version.js';

type Props = {
	readonly command?: string;
};

export default function App({command}: Props) {
	const [asciiLogo, setAsciiLogo] = useState<string>('');

	useEffect(() => {
		if (!command) {
			// Set the ASCII art logo directly
			setAsciiLogo(
				'██╗  ██╗███████╗██╗  ██╗\n██║  ██║██╔════╝╚██╗██╔╝\n███████║█████╗   ╚███╔╝ \n██╔══██║██╔══╝   ██╔██╗ \n██║  ██║███████╗██╔╝ ██╗\n╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝',
			);
		}
	}, [command]);

	if (command === '/version') {
		return <Version />;
	}

	return (
		<Box flexDirection="column">
			{asciiLogo && (
				<Box marginBottom={1}>
					<Text>{asciiLogo}</Text>
				</Box>
			)}
		</Box>
	);
}
