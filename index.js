'use strict';
const plugin = require('tailwindcss/plugin');
const {
	transformAllSelectors,
	updateLastClasses
} = require('tailwindcss/lib/util/pluginUtils');
const prefixSelector = require('tailwindcss/lib/util/prefixSelector').default;

const customVariant = name => {
	return plugin(({addVariant, config}) => {
		addVariant(
			name,
			transformAllSelectors(selector => {
				const variantSelector = updateLastClasses(selector, className => {
					return `${name}${config('separator')}${className}`;
				});

				if (variantSelector === selector) {
					return null;
				}

				const customVariantSelector = prefixSelector(
					config('prefix'),
					`.${name}`
				);

				return `${customVariantSelector} ${variantSelector}`;
			})
		);
	});
};

module.exports = customVariant;
