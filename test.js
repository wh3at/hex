import React from 'react';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './dist/app.js';

test('render app without command', t => {
	const {lastFrame} = render(React.createElement(App));

	// Verify the component renders without errors
	const output = lastFrame();
	t.is(typeof output, 'string');
});

test('render version command', t => {
	const {lastFrame} = render(React.createElement(App, {command: '/version'}));

	// Verify that version info is displayed
	const output = lastFrame();
	t.true(output.includes('hex'));
	t.true(output.includes('CLI tool'));
});
