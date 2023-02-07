import { clsx } from "clsx";
import Link from "next/link";
import Provider from "react-wrap-balancer";

export default function Page() {
	return (
		<Provider>
			<article
				className={clsx(
					"prose-sm m-4 sm:mx-auto sm:prose lg:prose-lg xl:prose-xl",
					"prose-headings:text-center prose-h1:underline prose-em:italic",
					"dark:prose-invert"
				)}>
				<h1>Post Example Title</h1>
				<h2>
					asdfafasfasdfsafadfsf
					<br />
					<em>Post example snippit</em>
				</h2>

				<p>
					Lorem ipsum dolo<em>asdfasfdasf</em>r sit amet, consectetur adipiscing
					elit. Sed at auctor turpis. Aenean nec tellus id quam ultricies
					lacinia. Proin fringilla ultrices dui non posuere. Duis eleifend
					venenatis mattis. Interdum et malesuada fames ac ante ipsum primis in
					faucibus. Nunc sed nunc vel diam tincidunt ultrices sed id neque.
					Class aptent taciti sociosqu ad litora torquent per conubia nostra,
					per inceptos himenaeos. Sed sed justo non ipsum porta euismod. Donec
					odio sapien, mattis vel ante et, gravida molestie nisi. Maecenas
					efficitur ligula vitae vehicula aliquam. Nullam ut leo at justo
					vulputate malesuada ac a augue. Nunc vel tempor ipsum.
					<br />
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
					<br />
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
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at auctor
					turpis. Aenean nec tellus id quam ultricies lacinia. Proin fringilla
					<a href="asfasdf">asdfsadfafdsa</a>
					ultrices dui non posuere. Duis eleifend venenatis mattis. Interdum et
					<Link href="/asdfasdf">asdfasdf</Link>
				</p>
			</article>
		</Provider>
	);
}
