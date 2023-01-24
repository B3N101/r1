module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"next",
		"next/core-web-vitals",
		"prettier",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/no-unescaped-entities": "off",
		"@next/next/no-page-custom-font": "off",
		"@next/next/no-img-element": "off",
		"@next/next/no-html-link-for-pages": "error",
		"@next/next/no-typos": "error",
		"@next/next/inline-script-id": "error",
		"@next/next/no-css-tags": "off",
		// no next head element
		"@next/next/no-head-element": "off",
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
	globals: {
		React: "writable",
	},
};
