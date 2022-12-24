/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			mxRed: "#ce0039",
			mxDark: "#1f1f1f",
			mxGray: "434344",
		},
		extend: {},
	},
	plugins: [],
};
