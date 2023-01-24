import { clsx } from "clsx";
import Balancer from "react-wrap-balancer";
import { Crimson_Pro, Merriweather_Sans, Comic_Neue } from "@next/font/google";

const crimsonPro = Crimson_Pro({
	subsets: ["latin"],
	variable: "--font-crimson",
});

const merriweatherSans = Merriweather_Sans({
	subsets: ["latin"],
	variable: "--font-merriweather",
});

const comicNeue = Comic_Neue({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-comic",
});
// This function compares two integers and returns
// true if the first one is less than the second one
// and false otherwise.

export default function Page(): JSX.Element {
	return (
		<div className={clsx("mb-22 container mx-auto pt-3")}>
			<text>
				<h1
					className={clsx(comicNeue.className, "text-3xl font-bold underline")}>
					Hello, Next.js!
				</h1>
			</text>
			<text>
				<p className={clsx(merriweatherSans.className, "text-xl")}>
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
				<h1
					className={clsx(
						crimsonPro.className,
						"text-3xl font-bold underline",
					)}>
					Hello, Next.js!
				</h1>
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
				<h1 className={clsx("text-3xl font-bold underline")}>
					Hello, Next.js!
				</h1>
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
				<h1 className={clsx("text-3xl font-bold underline")}>
					Hello, Next.js!
				</h1>
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
				<h1 className={clsx("text-3xl font-bold underline")}>
					Hello, Next.js!
				</h1>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className={clsx("text-3xl font-bold underline")}>
					Hello, Next.js!
				</h1>
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
				<h1 className={clsx("text-3xl font-bold underline")}>
					Hello, Next.js!
				</h1>
			</text>
			<text>
				<p className={clsx("text-xl")}>
					This is a test of the emergency broadcast system. This is a test of
					the emergency broadcast system. This is a test of the emergency
					broadcast system. This is a test of the emergency broadcast system.
				</p>
			</text>
			<text>
				<h1 className={clsx("text-3xl font-bold underline")}>
					Hello, Next.js!
				</h1>
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
