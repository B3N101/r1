/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } },
		],
	},
	reactStrictMode: true,
	modularizeImports: {
		"@heroicons/react/24/solid": {
			transform: "@heroicons/react/24/solid/{{member}}",
		},
	},
};

module.exports = nextConfig;
