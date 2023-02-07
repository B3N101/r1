import { defineDocumentType } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: "posts/*.mdx",
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		publishedAt: { type: "string", required: true },
		description: { type: "string" },
		author: { type: "string", required: true },
		category: {
			type: "enum",
			options: [
				"News",
				"Opinions",
				"Arts&Entertainment",
				"Sports",
				"Cartoons",
				"Videos",
			],
			required: true,
		},
		subcategory: {
			type: "enum",
			options: [
				"Student Spotlight",
				"Community Spotlight",
				"Athlete of the Issue",
				"Playlist of the Issue",
				"Crossword of the Issue",
			],
		},
		status: {
			type: "enum",
			options: ["draft", "published"],
			required: true,
		},
		image: { type: "string" },
		headline: {
			type: "boolean",
			default: false,
			required: false,
		},
	},
}));
