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
				primary: 'hsl(283.6364 21.5686% 80%)',
				secondary: 'hsl(351.6279 70.4918% 88.0392%)',
				accent: 'hsl(158.4906 54.6392% 80.9804%)',
				neutral: 'hsl(198.6207 43.7186% 60.9804%)',
				'surface-100': 'hsl(180 100% 100%)',
				'surface-200': 'hsl(210 20% 98.0392%)',
				'surface-300': 'hsl(216 12.1951% 83.9216%)'
			},
			dark: {
				'color-scheme': 'dark',
				primary: 'hsl(325.5224 100% 73.7255%)',
				secondary: 'hsl(264.7059 89.4737% 77.6471%)',
				accent: 'hsl(31.0204 100% 71.1765%)',
				neutral: 'hsl(229.5652 15.0327% 30%)',
				info: 'hsl(190.5263 96.6102% 76.8627%)',
				success: 'hsl(135.1765 94.4444% 64.7059%)',
				warning: 'hsl(64.9091 91.6667% 76.4706%)',
				danger: 'hsl(0 100% 66.6667%)',
				'surface-100': 'hsl(231.4286 14.8936% 18.4314%)'
			}
		}
	}
};

module.exports = config;
