import Link from "next/link";
import cn from "@lib/utils";
import { allPosts } from "contentlayer/generated";

// function removeWhitespace(str) {
// 	return str.replace(/\s/g, "");
// }

export default function Page() {
	let tags = allPosts.map((post) => post.tags).flat();
	// make tags unique
	tags = [...new Set(tags)];

	let tagSlugs = allPosts.map((post) => post.tagSlugs).flat();
	// make tagSlugs unique
	tagSlugs = [...new Set(tagSlugs)];
	tags.sort();
	tags.reverse();
	tagSlugs.sort();
	tagSlugs.reverse();

	return (
		<div>
			<h1 className={cn("mb-5 font-serif text-3xl font-bold")}>Issues</h1>
			<ul>
				{tags.map((tag, index) => (
					<li key={tag}>
						<Link href={`/issues/${tagSlugs[index]}`}>{tag}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
