import React, {useEffect, useState} from 'react';
import {Text, Box} from 'ink';
import {render, renderFilled} from 'oh-my-logo';
import Version from './components/version.js';

type Props = {
	readonly logo: string | undefined;
	readonly palette: string;
	readonly isFilled: boolean;
	readonly command?: string;
};

export default function App({
	logo = 'hex',
	palette = 'sunset',
	isFilled = true,
	command,
}: Props) {
	const [asciiLogo, setAsciiLogo] = useState<string>('');
	const [error, setError] = useState<string>('');

	useEffect(() => {
		if (logo && !command) {
			const generateLogo = async () => {
				try {
					const options = {palette};
					const renderFunction = isFilled ? renderFilled : render;
					const result = await renderFunction(logo, options);
					const logoText = result as string;
					setAsciiLogo(logoText);
				} catch (error_: unknown) {
					setError(
						`Failed to generate logo: ${
							error_ instanceof Error ? error_.message : 'Unknown error'
						}`,
					);
				}
			};

			void generateLogo();
		}
	}, [logo, palette, isFilled, command]);

	if (command === '/version') {
		return <Version />;
	}

	return (
		<Box flexDirection="column">
			{error && <Text color="red">{error}</Text>}
			{asciiLogo && (
				<Box marginBottom={1}>
					<Text>{asciiLogo}</Text>
				</Box>
			)}
		</Box>
	);
}
