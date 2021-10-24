# tailwindcss-custom-variant [![test](https://github.com/vadimdemedes/tailwindcss-custom-variant/actions/workflows/test.yml/badge.svg)](https://github.com/vadimdemedes/tailwindcss-custom-variant/actions/workflows/test.yml)

> Tailwind plugin for adding a custom variant similar to the built-in `dark` variant

Note that it only works in [JIT mode](https://tailwindcss.com/docs/just-in-time-mode).

## Install

```sh
npm install --save-dev tailwindcss-custom-variant
```

## Usage

In tailwind.config.js:

```js
const customVariant = require('tailwindcss-custom-variant');

module.exports = {
	mode: 'jit',
	plugins: [customVariant('hawkins')]
};
```

In your HTML:

```html
<div class="hawkins:opacity-0"></div>
```

Then the following CSS will be generated:

```css
.hawkins .hawkins\:bg-black {
	opacity: 0;
}
```

You can use this to add a custom variant like Tailwind's `dark` that rely on a certain class to be added above (e.g. to `<html>`).

## API

### customVariant(name)

#### name

Type: `string`

Custom variant name.
