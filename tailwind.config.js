// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'titilium-regular': ['titilium-regular'],
				'titilium-semibold': ['titilium-semibold'],
				'titilium-bold': ['titilium-bold'],
				'titilium-black': ['titilium-black'],
			},
			colors: {
				primary: '#1d1d1f',
				secondary: '#282b33',
				neutral: '#fafafa',
				other: '#464c5a',
				// blue: '#2d53fc',
				// red: '#f81515',
			},
		},
	},
	plugins: [],
}
