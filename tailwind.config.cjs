/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Dosis', 'sans-serif'],
				serif: ['PT Serif', 'serif']
			},
			colors: {
				midnight: '#0E0F15',
				red: '#A70019',
				skin: '#CE986F',
				gold: '#DFC789'
			}
		}
	},
	plugins: []
};
