import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

function removeWhitespace(str) {
	return str.replace(/\s/g, "");
}
export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: "**/*.mdx",
	contentType: "mdx",
	fields: {
		author: {
			type: "string",
			required: true,
		},
		category: {
			type: "string",
			required: true,
		},
		title: {
			type: "string",
			required: true,
		},
		subtitle: {
			type: "string",
			required: true,
		},
		date: {
			type: "string",
			required: true,
		},
		image: {
			type: "string",
			required: false,
		},
		headline: {
			type: "boolean"
		},
		tags: {
			type: "list",
			of: {
				type: "string"
			},
		},
	},
	/** @type {import('contentlayer/source-files').ComputedFields} */
	computedFields: {
		url: {
			type: "string",
			resolve: (doc) => `${doc._raw.flattenedPath}`,
		},
		authorSlug: {
			type: "string",
			resolve: (doc) => `${removeWhitespace(doc.author)}`,
		},
		categorySlug: {
			type: "string",
			resolve: (doc) => `${removeWhitespace(doc.category)}`,
		},
		
		tagSlugs: {
			type: "list",
			of: {
				type: "string",
			},
			resolve: (doc) => {
				const tags = doc.tags as string[];
				let data = Array.from(tags);
				data = data.map((tag) => { return removeWhitespace(tag.toLowerCase()); });
				return data;
			}
		},
	},
}));

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: "one-dark-pro",
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push("line--highlighted");
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ["word--highlighted"];
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["anchor"],
					},
				},
			],
		],
	},
});
