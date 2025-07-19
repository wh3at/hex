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
		--logo     Text to display as ASCII art logo
		--palette  Color palette for the logo (default: sunset)
		           Available: blue, sunset, matrix, ocean, purple, pink, 
		           fire, forest, gold, rose, ice, neon
		--is-filled   Use filled style for the logo

	Examples
	  $ hex --logo="HELLO" --palette=sunset
	  Display HELLO with sunset gradient

	  $ hex --logo="CODE" --palette=matrix --is-filled
	  Display CODE with matrix colors in filled style
`,
	{
		importMeta: import.meta,
		flags: {
			logo: {
				type: 'string',
			},
			palette: {
				type: 'string',
				default: 'sunset',
			},
			isFilled: {
				type: 'boolean',
				default: true,
			},
		},
	},
);

render(
	<App
		logo={cli.flags.logo}
		palette={cli.flags.palette}
		isFilled={cli.flags.isFilled}
	/>,
);
