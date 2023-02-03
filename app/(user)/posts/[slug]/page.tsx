import Balancer from "react-wrap-balancer";
import clsx from "clsx";
import fs  from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
	const folder = "content/";
	const file = `${folder}${slug}.md`;
	const content = fs.readFileSync(file, "utf8");
	const matterResult = matter(content);
	return matterResult;
};


export default function Page({
	params 
} : { 
    params: { slug: string };
}) {
	const post = getPostContent(params.slug);


	return (
		<article
			className={clsx(
				"prose-sm m-4 sm:mx-auto sm:prose lg:prose-lg xl:prose-xl",
				"prose-headings:text-center prose-h1:underline prose-em:italic",
				"dark:prose-invert",
			)}>
			<Balancer>
				<Markdown>
					{post.content}
				</Markdown>
			</Balancer>
		</article>
	);
}
