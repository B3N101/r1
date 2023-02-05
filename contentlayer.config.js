import { defineDocumentType, makeSource } from "contentlayer/source-files";

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
			type: "date",
			required: true,
		},
		image: {
			type: "string",
			required: false,
		},
		headline: {
			type: "boolean",
			required: true,
		},
	},
	/** @type {import('contentlayer/source-files').ComputedFields} */
	computedFields: {
		url: {
			type: "string",
			resolve: (post) => `/posts/${post._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({
	contentDirPath: "posts",
	documentTypes: [Post],
});
