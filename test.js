import test from 'ava';
import { render } from 'ink-testing-library';
import React from 'react';
import App from './dist/app.js';

test('render app', (t) => {
	const { lastFrame } = render(React.createElement(App));

	// Verify the component renders without errors
	const output = lastFrame();
	t.is(typeof output, 'string');
});
