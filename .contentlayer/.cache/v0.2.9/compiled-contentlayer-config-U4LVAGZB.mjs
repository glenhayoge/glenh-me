// contentlayer.config.js
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import mdxOptions from "config/md.tsx";
var Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true }
  }
}));
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "articles/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    seoDescription: { type: "string", required: true },
    category: { type: "string", required: true },
    author: {
      type: "nested",
      of: Author
    },
    image: { type: "string", required: true }
  },
  computedFields
}));
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};
var contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article],
  mdx: mdxOptions
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-U4LVAGZB.mjs.map
