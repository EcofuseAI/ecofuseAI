/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mabryPro: ['MabryPro', 'sans'],
				tarunoWide: ['TarunoWide', 'sans'],
			},
		},
	},
	plugins: [],
};
