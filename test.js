const test = require('ava');
const postcss = require('postcss');
const tailwind = require('tailwindcss');
const stripIndent = require('strip-indent');
const customVariant = require('.');

test('add custom variant', async t => {
	const processor = postcss([
		tailwind({
			mode: 'jit',
			darkMode: 'media',
			purge: ['test.html'],
			plugins: [customVariant('woot')]
		})
	]);

	const {css} = await processor.process(`
		@tailwind utilities;
	`);

	t.is(
		css.trim(),
		stripIndent(
			`
			.woot .woot\\:opacity-0 {
			    opacity: 0
			}
			@media (prefers-color-scheme: dark) {
			    .woot .woot\\:dark\\:opacity-0 {
			        opacity: 0
			    }
			    .woot .woot\\:dark\\:hover\\:opacity-0:hover {
			        opacity: 0
			    }
			}
			`
		).trim()
	);
});
