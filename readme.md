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
<div class="hawkins:bg-black hawkins:hover:bg-white"></div>
```

## API

### customVariant(name)

#### name

Type: `string`

Custom variant name.
