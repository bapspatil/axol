/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"crypto-frost": "#fdfff9",
				"shadow-blockchain": "#15002e",
				"axol-coral": "#ffcd9c",
				"decentralized-coral": "#e68476",
				"node-indigo": "#28338b",
				"cryptowave-sky": "#58a1c6",
			},
			fontFamily: {
				'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
				'title': ["'Panamera'", 'sans-serif'],
				'body': ["'Plus Jakarta Sans'", 'sans-serif'],
				'display': ["'Panamera'", 'sans-serif'],
			},
			borderRadius: {
				DEFAULT: '6px',
			},
			borderWidth: {
				'6': '6px',
			},
		},
		spacing: {
			'0': '0px',
			'1': '4px',
			'2': '8px',
			'4': '16px',
			'6': '24px',
			'8': '32px',
			'10': '40px',
			'12': '48px',
			'16': '64px',
			'20': '80px',
			'24': '96px',
			'28': '112px',
			'32': '128px',
			'36': '144px',
			'40': '160px',
			'44': '176px',
			'48': '192px',
			'52': '208px',
			'56': '224px',
			'60': '240px',
			'64': '256px',
			'72': '288px',
			'80': '320px',
			'96': '384px',
			'128': '512px',
			'160': '640px',
			'192': '768px',
			'224': '896px',
			'256': '1024px',
			'288': '1152px',
			'320': '1280px',
			'384': '1536px',
			'400': '1600px',
		},
		fontSize: {
			base: ['20px', {
				lineHeight: '145%',
				letterSpacing: '0em',
				fontWeight: '500',
			}],
			'body-md': ['1rem', {
				lineHeight: '145%',
				letterSpacing: '0em',
				fontWeight: '500',
			}],
			'body-sm': ['0.8rem', {
				lineHeight: '145%',
				letterSpacing: '0em',
				fontWeight: '500',
			}],
			'h1': ['3.6rem', {
				lineHeight: '100%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
			'h2': ['3.2rem', {
				lineHeight: '100%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
			'h3': ['2.4rem', {
				lineHeight: '100%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
			'h4': ['1.8rem', {
				lineHeight: '100%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
			'h5': ['1.4rem', {
				lineHeight: '100%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
			'mobile-h1': ['2.2rem', {
				lineHeight: '100%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
			'mobile-h2': ['1.8rem', {
				lineHeight: '100%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
			'mobile-h3': ['1.5rem', {
				lineHeight: '100%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
			'nav': ['1rem', {
				lineHeight: '145%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
			'label': ['0.7rem', {
				lineHeight: '120%',
				letterSpacing: '10%',
				fontWeight: '700',
			}],
			'button': ['1.2rem', {
				lineHeight: '120%',
				letterSpacing: '0em',
				fontWeight: '600',
			}],
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				'html': { fontSize: "20px" },
			})
		}),
	],
}
