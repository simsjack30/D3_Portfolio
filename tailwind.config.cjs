const colors = require('tailwindcss/colors');
const svelte_ux = require('svelte-ux/plugins/tailwind.cjs');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,svelte}',
		'./node_modules/svelte-ux/**/*.{svelte,js}',
		'./node_modules/layerchart/**/*.{svelte,js}'
	],
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [svelte_ux],
	ux: {
		themes: {
			light: {
				'color-scheme': 'light',
				primary: 'hsl(283.3333 13.0435% 72.9412%)',
				secondary: 'hsl(352.2581 38.2716% 84.1176%)',
				accent: 'hsl(157.6744 33.8583% 75.098%)',
				neutral: 'hsl(198.6207 43.7186% 60.9804%)',
				'surface-100': 'hsl(0 0% 94.1176%)',
				'surface-200': 'hsl(210 20% 98.0392%)',
				'surface-300': 'hsl(216 12.1951% 83.9216%)'
			},
			dark: {
				'color-scheme': 'dark',
				primary: 'hsl(234.8208 100% 72.6713%)',
				secondary: 'hsl(209.1329 100% 66.0784%)',
				accent: 'hsl(173.7346 100% 40.1728%)',
				neutral: 'hsl(213.3333 17.6471% 20%)',
				'surface-100': 'hsl(212.3077 16.8831% 15.098%)',
				'surface-200': 'hsl(212.7273 18.0328% 11.9608%)',
				'surface-300': 'hsl(213.3333 17.6471% 10%)'
			}
		}
	}
};

module.exports = config;
