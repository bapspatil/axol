/** @type {import('tailwindcss').Config} */
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
				"body-s": "'Plus Jakarta Sans'",
				h4: "Panamera",
				"panamera": ["'Panamera'", 'sans-serif'],
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
			base: "16px",
			xl: "20px",
			"5xl": "24px",
			lgi: "19px",
			"45xl": "64px",
			"32xl": "51px",
			"19xl": "38px",
			"9xl": "28px",
			"3xl": "22px",
			"17xl": "36px",
			"10xl": "29px",
			"sm-9": "13.9px",
			inherit: "inherit",
		},
		screens: {
			mq1275: {
				raw: "screen and (max-width: 1275px)",
			},
			mq1100: {
				raw: "screen and (max-width: 1100px)",
			},
			mq750: {
				raw: "screen and (max-width: 750px)",
			},
			mq450: {
				raw: "screen and (max-width: 450px)",
			},
		},
	},
	plugins: [],
}
