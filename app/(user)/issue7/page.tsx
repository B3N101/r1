import clsx from "clsx";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

function getPostsByTag(tag) {
	return allPosts.filter((post) => post.tagSlugs.includes(tag));
}

export default function Page() {
	const posts = getPostsByTag("tag22");
	return (
		<section>
			<h1 className="mb-5 font-serif text-3xl font-bold">Posts</h1>
			{posts
				.sort((a, b) => {
					if (new Date(a.date) > new Date(b.date)) {
						return -1;
					}
					return 1;
				})
				.map((post) => (
					<Link
						key={post.url}
						className="mb-4 flex flex-col space-y-1"
						href={`/posts/${post.url}`}>
						<div className="flex w-full flex-col">
							<p>{post.title}</p>
						</div>
					</Link>
				))}
		</section>
	);
}
