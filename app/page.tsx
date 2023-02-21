"use client";
import { clsx } from "clsx";
import Balancer from "react-wrap-balancer";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const headlinedPosts = allPosts.filter((post) => post.headline);

const pagesByDate = allPosts.sort((a, b) => {
	if (a.date > b.date) {
		return -1;
	} else if (a.date < b.date) {
		return 1;
	} else {
		return 0;
	}
});

// const totalPages = Math.ceil(pagesByDate.length / 10);

export default function Page() {
	const searchParmas = useSearchParams();
	const page = Number(searchParmas.get("page")) || 1;
	const pageSize = 10;

	const posts = pagesByDate.slice((page - 1) * pageSize, page * pageSize);

	return (
		<div className={clsx("mb-22 container mx-auto pt-3")}>
			<h1 className={clsx("mb-4 text-4xl font-bold")}>Headlined Posts</h1>
			<ul>
				{headlinedPosts.map((post) => (
					<li key={post._id}>
						<Link href={`posts/${post.url}`}>
							<Balancer>
								<h2 className={clsx("text-2xl font-bold")}>{post.title}</h2>
								<p className={clsx("text-gray-500")}>{post.subtitle}</p>
								<Image
									src={post.image}
									alt={post.title}
									width={500}
									height={500}
								/>
							</Balancer>
						</Link>
					</li>
				))}
			</ul>

			<h1 className={clsx("mb-4 text-4xl font-bold")}>Latest 10 Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post._id}>
						<Link href={`posts/${post.url}`}>
							<Balancer>
								<h2 className={clsx("text-2xl font-bold")}>{post.title}</h2>
								<p className={clsx("text-gray-500")}>{post.subtitle}</p>
								<p className={clsx("text-gray-500")}>{post.date}</p>
								<p className={clsx("text-gray-500")}>{post.author}</p>
								<p className={clsx("text-gray-500")}>{post.category}</p>
							</Balancer>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
