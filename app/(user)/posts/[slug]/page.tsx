/* eslint-disable react/prop-types */
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import Mdx from "@components/mdx";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import cn from "@lib/utils";
import removeWhitespace from "@lib/whitespace";

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

	return (
		<section className="mx-auto max-w-3xl p-6">
			<h1 className="font-serif text-3xl font-bold">
				<Balancer>{post.title}</Balancer>
			</h1>
			<h2 className="text-md font-serif font-normal italic">
				<Balancer>{post.subtitle}</Balancer>
			</h2>
			<div className="mt-4 mb-8 grid grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
				<div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
					<p>{format(parseISO(post.date), "LLLL d, yyyy")}</p>
					{/*<Link href={`${post.author}`}>{post.author}</Link>*/}
					<Link
						className={cn("text-sky-800 hover:underline dark:text-sky-300")}
						href={`../writers/${post.authorSlug}`}>
						{post.author}
					</Link>
					<p>{Math.ceil(post.readingTime.minutes)} min read</p>
				</div>
				<div className="mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-800" />
			</div>
			{/* Horizontal rule */}
			<div className="my-4 border-t border-neutral-200 dark:border-neutral-700" />
			{<Mdx code={post.body.code} />}

			{/* Bar at the bottom in which tags are displayed */}
			<div className="mt-8 grid grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
				<div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
					{post.tags.map((tag) => (
						<Link
							key={tag}
							className={cn("text-sky-800 hover:underline dark:text-sky-300")}
							href={`../issues/${removeWhitespace(tag.toLowerCase())}`}>
							{tag}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
