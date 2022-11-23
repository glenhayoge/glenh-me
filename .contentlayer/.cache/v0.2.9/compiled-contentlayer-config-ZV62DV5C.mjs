// contentlayer.config.js
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

// config/md.ts
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import remarkExternalLinks from "remark-external-links";
import rehypeImgSize from "rehype-img-size";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
var mdxOptions = {
  remarkPlugins: [remarkExternalLinks, remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    rehypeCodeTitles,
    rehypePrism,
    rehypeAutolinkHeadings,
    rehypeAccessibleEmojis,
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ["anchor"]
        }
      }
    ],
    [
      rehypeImgSize,
      {
        dir: "public"
      }
    ]
  ],
  compilers: []
};
var md_default = mdxOptions;

// contentlayer.config.js
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
  contentDirPath: ["data", "config"],
  documentTypes: [Article],
  mdx: md_default
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZV62DV5C.mjs.map
