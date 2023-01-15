import { clsx } from "clsx";
import Balancer from "react-wrap-balancer";
import { Crimson_Pro } from "@next/font/google";
const crimsonPro = Crimson_Pro({
	subsets: ["latin"],
	variable: "--font-crimson",
});

// This function compares two integers and returns
// true if the first one is less than the second one
// and false otherwise.

export default function Page(): JSX.Element {
	return (
		<div className={clsx("container mx-auto mb-22 pt-3")}>
			<p className={clsx("font-proxima-nova italic font-extrabold text-3xl")}>
				The quick brown fox jumps over the lazy dog
			</p>
			<p className={clsx("font-serif italic font-extrabold text-3xl")}>
				asdfasfasfddas
			</p>

			<text className={clsx(crimsonPro.className)}>
				<h1 className={clsx("text-3xl font-bold underline")}>Hello, Next.js!</h1>
			</text>
			<text>
				<p className={clsx("text-xl")}>
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
				<h1 className={clsx("text-3xl font-bold underline")}>Hello, Next.js!</h1>
			</text>
			<text className={clsx("text-xl")}>
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
				<h1 className={clsx("text-3xl font-bold underline")}>Hello, Next.js!</h1>
			</text>
			<text className={clsx("text-xl")}>
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
				<h1 className={clsx("text-3xl font-bold underline")}>Hello, Next.js!</h1>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className={clsx("text-3xl font-bold underline")}>Hello, Next.js!</h1>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className={clsx("text-3xl font-bold underline")}>Hello, Next.js!</h1>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className={clsx("text-3xl font-bold underline")}>Hello, Next.js!</h1>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className={clsx("text-3xl font-bold underline")}>Hello, Next.js!</h1>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast sddystem.
				</p>
			</text>
		</div>
	);
}