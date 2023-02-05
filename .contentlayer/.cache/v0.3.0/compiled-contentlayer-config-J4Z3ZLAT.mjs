// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    author: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    title: {
      type: "string",
      required: true
    },
    subtitle: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    image: {
      type: "string",
      required: false
    },
    headline: {
      type: "boolean",
      required: true
    }
  },
  /** @type {import('contentlayer/source-files').ComputedFields} */
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-J4Z3ZLAT.mjs.map
