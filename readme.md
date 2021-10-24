# tailwind-custom-variant

> Tailwind plugin for adding a custom variant similar to the built-in `dark` variant

Note that it only works in [JIT mode](https://tailwindcss.com/docs/just-in-time-mode).

## Install

```sh
npm install --save-dev tailwind-custom-variant
```

## Usage

In tailwind.config.js:

```js
const customVariant = require('tailwind-custom-variant');

module.exports = {
	mode: 'jit',
	plugins: [customVariant('hawkins')]
};
```

In your HTML:

```html
<div className="hawkins:bg-black hawkins:hover:bg-white"></div>
```

## API

### customVariant(name)

#### name

Type: `string`

Custom variant name.
