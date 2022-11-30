// tailwind.config.js

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
		},
	},
	plugins: [],
}
