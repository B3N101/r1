import { allPosts} from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.url,
	}));
}


export default function Page({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post.url === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<section>
			<h1 className="mb-5 font-serif text-3xl font-bold">Blog</h1>
			<p>{post.title}</p>
		</section>
	);
}
