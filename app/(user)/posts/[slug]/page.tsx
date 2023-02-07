/* eslint-disable react/prop-types */
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { useMDXComponent } from "next-contentlayer/hooks";
import clsx from "clsx";
import Link from "next/link";

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.url,
	}));
}

export default function Page({ params }) {
	const post = allPosts.find((post) => post.url === params.slug);

	if (!post) {
		notFound();
	}
	const title = post.title;
	const subtitle = post.subtitle;
	const date = post.date;
	const author = post.author;

	//const MDXContent = useMDXComponent(post.body.code);

	return (
		<section className="p-6 mx-auto max-w-3xl">
			<h1 className="font-serif text-3xl font-bold">
				<Balancer>{post.title}</Balancer>
			</h1>
			<h2 className="font-serif text-md font-normal italic">
				<Balancer>{post.subtitle}</Balancer>
			</h2>
			{/* green text, purple if dark mode */}
			<p className="text-neutral-600 dark:text-neutral-400">
				<Balancer>{post.date}</Balancer>
			</p>
			<div className="mt-4 mb-8 grid grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
				<div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
					<p>{post.date}</p>
					<Link href={`${post.author}`}>{post.author}</Link>
				</div>
				<div className="bg-neutral-50 dark:bg-neutral-800 mx-2 h-[0.2em]" />
			</div>
			{/* Horizontal rule */}
			<div className="border-neutral-200 dark:border-neutral-700 my-4 border-t" />
			{
				<div
					id="mdx-content"
					dangerouslySetInnerHTML={{ __html: post.body.html }}
					className={clsx("prose","dark:prose-invert")}
				/>
			}
			{/* <MDXContent /> */}
		</section>
	);
}
