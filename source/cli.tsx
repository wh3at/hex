#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ hex

	Options
		--help     Show help

	Commands
		/version   Show version information
`,
	{
		importMeta: import.meta,
	},
);

const command = cli.input[0]?.startsWith('/') ? cli.input[0] : undefined;

render(<App command={command} />);
