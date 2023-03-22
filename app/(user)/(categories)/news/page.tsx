import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import cn from "@lib/utils";

function getPostsByCategory(category) {
	return allPosts.filter((post) => post.category.includes(category));
}

export default function Page() {
	const posts = getPostsByCategory("News");
	return (
		<section>
			<h1 className="mb-5 font-serif text-3xl font-bold">News</h1>
			{posts
				.sort((a, b) => {
					if (new Date(a.date) > new Date(b.date)) {
						return -1;
					}
					return 1;
				})
				.map((post) => (
					<div
						key={post.url}
						className="w-full rounded-xl border-2 border-current p-2 hover:underline">
						<Link
							className="mb-4 flex flex-col space-y-1"
							href={`/posts/${post.url}`}>
							<div className="flex w-full flex-col">
								<p className={cn("text-base")}>{post.title}</p>
								<p
									className={cn(
										"text-sm text-gray-500 decoration-gray-500 hover:underline",
									)}>
									{post.author}
									<br />
									{Math.ceil(post.readingTime.minutes)} min read
								</p>
							</div>
						</Link>

						{post.image && (
							<div className="object-contain">
								<Image
									src={post.image}
									alt={post.title}
									width={500}
									height={500}
								/>
							</div>
						)}
					</div>
				))}
		</section>
	);
}
