import React, {useEffect, useState} from 'react';
import {Text, Box} from 'ink';
import {render, renderFilled} from 'oh-my-logo';

type Props = {
	readonly logo: string | undefined;
	readonly palette: string;
	readonly isFilled: boolean;
};

export default function App({
	logo = 'hex',
	palette = 'sunset',
	isFilled = true,
}: Props) {
	const [asciiLogo, setAsciiLogo] = useState<string>('');
	const [error, setError] = useState<string>('');

	useEffect(() => {
		if (logo) {
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
	}, [logo, palette, isFilled]);

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
