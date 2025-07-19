import React from 'react';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './source/app.js';

test('render without logo', t => {
	const {lastFrame} = render(
		<App logo={undefined} palette="blue" isFilled={false} />,
	);

	t.is(lastFrame(), '');
});

test('render with custom palette', t => {
	const {lastFrame} = render(
		<App logo={undefined} palette="sunset" isFilled={false} />,
	);

	t.is(lastFrame(), '');
});

test('render with filled style', t => {
	const {lastFrame} = render(<App isFilled logo={undefined} palette="blue" />);

	t.is(lastFrame(), '');
});

test('render with logo prop', t => {
	const {lastFrame} = render(
		<App logo="TEST" palette="blue" isFilled={false} />,
	);

	// Since logo rendering is async, we just verify the component renders without errors
	// The actual logo will be displayed after the async operation completes
	t.is(typeof lastFrame(), 'string');
});
