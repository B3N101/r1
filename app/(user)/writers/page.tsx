import Link from "next/link";
import cn from "@lib/utils";
import { allPosts } from "contentlayer/generated";

// function removeWhitespace(str) {
// 	return str.replace(/\s/g, "");
// }

export default function Page() {
	let authors = allPosts.map((post) => post.author).flat();
	// make authors unique
	authors = [...new Set(authors)];

	let authorSlugs = allPosts.map((post) => post.authorSlugs).flat();
	// make authorSlugs unique
	authorSlugs = [...new Set(authorSlugs)];
	authorSlugs.sort();
	authors.sort();

	return (
		<div className={cn("text-center")}>
			<h1 className={cn("mb-5 font-serif text-3xl font-bold")}>Writers</h1>
			<ul>
				{authors.map((author, index) => (
					<li key={author} className={cn("text-lg")}>
						<Link href={`/authors/${authorSlugs[index]}`}>{author}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
