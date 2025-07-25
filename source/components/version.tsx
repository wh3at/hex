import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import React from 'react';
import {Box, Text} from 'ink';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packagePath = path.join(__dirname, '..', '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8')) as {
	version: string;
	license?: string;
	engines?: {
		node?: string;
	};
};

export default function Version() {
	return (
		<Box flexDirection="column" paddingY={1}>
			<Box borderStyle="round" paddingX={2} paddingY={1}>
				<Box flexDirection="column" gap={1}>
					<Text bold color="cyan">
						🔷 hex v{pkg.version}
					</Text>
					<Text color="gray">A CLI tool for generating ASCII art logos</Text>
					<Box marginTop={1}>
						<Text color="yellow">License: </Text>
						<Text>{pkg.license ?? 'MIT'}</Text>
					</Box>
					<Box>
						<Text color="green">Node: </Text>
						<Text>≥{pkg.engines?.node ?? '16'}</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
