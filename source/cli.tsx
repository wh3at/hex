#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

meow(
	`
	Usage
	  $ hex

	Options
		--help     Show help
`,
	{
		importMeta: import.meta,
	},
);

render(<App />);
