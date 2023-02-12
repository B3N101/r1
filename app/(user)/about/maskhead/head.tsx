export default function Head() {
	const image = "https://og-image.vercel.app/%3Cb%3EMx%3C%2Fb%3EAnvil.png?theme=dark&md=1&fontSize=225px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=0&heights=0";
	return (
		<>
			<title>The Anvil | Maskhead </title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />

			{/* SEO */}
			<meta
				name="description"
				content="The Anvil is Middlesex's student ran newspaper"
			/>
			{/* Open Graph */}
			<meta property="og:title" content="The Middlesex Anvil" />
			<meta
				property="og:description"
				content="The Anvil is Middlesex's student ran newspaper"
			/>
			<meta property="og:image" content={image} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@anvilnewspaper" />
			<meta name="twitter:creator" content="@anvilnewspaper" />
			<meta name="twitter:domain" content="mxanvil.vercel.app" />
			<meta name="twitter:url" content="https://mxanvil.vercel.app" />
			<meta name="twitter:title" content="The Middlesex Anvil" />
			<meta
				name="twitter:description"
				content="The Anvil is Middlesex's student ran newspaper"
			/>
			<meta name="twitter:image" content={image} />

			{/* Facebook */}
			<meta property="og:url" content="https://mxanvil.vercel.app" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="The Middlesex Anvil" />
			<meta
				property="og:description"
				content="The Anvil is Middlesex's student ran newspaper"
			/>
			<meta property="og:image" content={image} />

			{/* Google */}
			<meta
				name="google-site-verification"
				content="Z912kU5-BcxuswGHKk5ELT1oWVa33Ejmr0PyAwKcK_c"
			/>

			{/* Fonts */}
		</>
	);
}
