import text from "./components/text/text";
import italic from "./components/text/italic";
import Balancer from "react-wrap-balancer";
import { Crimson_Pro } from "@next/font/google";
const crimsonPro = Crimson_Pro({
	subsets: ["latin"],
	variable: "--font-crimson",
});

export default function Page() {
	return (
		<div className="container mx-auto mb-22 pt-3">
			<p className="font-proxima-nova italic font-extrabold text-3xl">
				The quick brown fox jumps over the lazy dog
			</p>
			<p className="font-serif italic font-extrabold text-3xl">
				asdfasfasfddas
			</p>

			<text className={crimsonPro.className}>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at auctor
					turpis. Aenean nec tellus id quam ultricies lacinia. Proin fringilla
					ultrices dui non posuere. Duis eleifend venenatis mattis. Interdum et
					malesuada fames ac ante ipsum primis in faucibus. Nunc sed nunc vel
					diam tincidunt ultrices sed id neque. Class aptent taciti sociosqu ad
					litora torquent per conubia nostra, per inceptos himenaeos. Sed sed
					justo non ipsum porta euismod. Donec odio sapien, mattis vel ante et,
					gravida molestie nisi. Maecenas efficitur ligula vitae vehicula
					aliquam. Nullam ut leo at justo vulputate malesuada ac a augue. Nunc
					vel tempor ipsum.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text className="text-xl">
				<Balancer>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at auctor
					turpis. Aenean nec tellus id quam ultricies lacinia. Proin fringilla
					ultrices dui non posuere. Duis eleifend venenatis mattis. Interdum et
					malesuada fames ac ante ipsum primis in faucibus. Nunc sed nunc vel
					diam tincidunt ultrices sed id neque. Class aptent taciti sociosqu ad
					litora torquent per conubia nostra, per inceptos himenaeos. Sed sed
					justo non ipsum porta euismod. Donec odio sapien, mattis vel ante et,
					gravida molestie nisi. Maecenas efficitur ligula vitae vehicula
					aliquam. Nullam ut leo at justo vulputate malesuada ac a augue. Nunc
					vel tempor ipsum.
				</Balancer>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text className="text-xl">
				<Balancer>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at auctor
					turpis. Aenean nec tellus id quam ultricies lacinia. Proin fringilla
					ultrices dui non posuere. Duis eleifend venenatis mattis. Interdum et
					malesuada fames ac ante ipsum primis in faucibus. Nunc sed nunc vel
					diam tincidunt ultrices sed id neque. Class aptent taciti sociosqu ad
					litora torquent per conubia nostra, per inceptos himenaeos. Sed sed
					justo non ipsum porta euismod. Donec odio sapien, mattis vel ante et,
					gravida molestie nisi. Maecenas efficitur ligula vitae vehicula
					aliquam. Nullam ut leo at justo vulputate malesuada ac a augue. Nunc
					vel tempor ipsum.
				</Balancer>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
			</text>
			<text>
				<p className="text-xl">
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast sddystem.
				</p>
			</text>
		</div>
	);
}

/*
<nav className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>

        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </nav>

*/
