import {
  defineDocumentType,
  makeSource,
  type ComputedFields,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "Short summary of the post",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Tags for the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    ...computedFields,
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Post],
});
