/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require("next-contentlayer");

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
	headers() {
		return [
			{
				source: "/(.*)",
				headers: securityHeaders,
			},
		];
	}
};
// https://nextjs.org/docs/advanced-features/security-headers
const contentSecurityPolicy = `
  default-src 'self' vercel.live *.vercel.app *.vercel.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  connect-src *;
  media-src 'none';
  img-src * blob: data:;
`;

const securityHeaders = [
	{
		key: "Content-Security-Policy",
		value: contentSecurityPolicy.replace(/\n/g, ""),
	},
	{
		key: "Referrer-Policy",
		value: "origin-when-cross-origin",
	},
	{
		key: "X-Frame-Options",
		value: "DENY",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=31536000; includeSubDomains; preload",
	},
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=()",
	},
];

module.exports = withContentlayer(nextConfig);
