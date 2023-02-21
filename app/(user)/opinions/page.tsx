import clsx from "clsx";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

function getPostsByCategory(category) {
	return allPosts.filter((post) => post.category.includes(category));
}


export default function Page() {
	const posts = getPostsByCategory("Opinions");
	return (
		<section>
			<h1 className="mb-5 font-serif text-3xl font-bold">Opinions</h1>
			{posts
				.sort((a, b) => {
					if (new Date(a.date) > new Date(b.date)) {
						return -1;
					}
					return 1;
				})
				.map((post) => (
					<div key={post.url} className="border-4 border-current">
						<Link
							className="mb-4 flex flex-col space-y-1"
							href={`/posts/${post.url}`}>
							<div className="flex w-full flex-col">
								<p>{post.title}</p>
							</div>
						</Link>
						<>
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
						</>
					</div>
				))}
		</section>
	);
}
