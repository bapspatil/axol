/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"brand-colors-decentralized-coral": "#e68476",
				"brand-colors-shadow-blockchain": "#15002e",
				"brand-colors-axol-coral": "#ffcd9c",
				"brand-colors-node-indigo": "#28338b",
				"brand-colors-cryptowave-sky": "#58a1c6",
				darkslateblue: "#4f59b3",
				"brand-colors-crypto-frost": "#fdfff9",
				lavender: "rgba(242, 232, 255, 0.55)",
				blanchedalmond: "#ffe7ce",
			},
			spacing: {},
			fontFamily: {
				'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
				'title': ["'Panamera'", 'sans-serif'],
				'body': ["'Plus Jakarta Sans'", 'sans-serif'],
				'display': ["'Panamera'", 'sans-serif'],
			},
			borderRadius: {
				"8981xl": "9000px",
				"81xl": "100px",
				"53xl": "72px",
				lg: "18px",
				"106xl": "125px",
				"77xl": "96px",
			},
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
