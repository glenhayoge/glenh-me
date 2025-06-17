// contentlayer.config.js
import readingTime from "reading-time";

// config/md.mjs
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";
import remarkExternalLinks from "remark-external-links";
var md_default = {
  remarkPlugins: [
    remarkGfm,
    [remarkExternalLinks, { target: "_blank", rel: "noopener noreferrer" }]
  ],
  rehypePlugins: [
    rehypeCodeTitles,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ["anchor"]
        }
      }
    ],
    [
      rehypePrismPlus,
      {
        ignoreMissing: true,
        showLineNumbers: true
      }
    ]
  ]
};

// contentlayer.config.js
import GithubSlugger from "github-slugger";
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer2/source-files";
import rehypePrismPlus2 from "rehype-prism-plus";
var Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true }
  }
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
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<data>.+)/g;
      const slugger = new GithubSlugger();
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const data = groups?.data;
          return {
            level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
            text: data,
            slug: data ? slugger.slug(data) : void 0
          };
        }
      );
      return headings;
    }
  }
};
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    seoDescription: { type: "string", required: true },
    category: { type: "string", required: true },
    tags: { type: "string", required: true },
    caption: { type: "string", required: true },
    author: {
      type: "nested",
      of: Author
    },
    image: { type: "string", required: true },
    toc: {
      type: "boolean",
      required: true,
      default: true
    }
  },
  computedFields
}));
var Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    updatedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
    tags: { type: "string", required: true }
  },
  computedFields
}));
var Books = defineDocumentType(() => ({
  name: "Book",
  filePathPattern: `books/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    category: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    author: { type: "string", required: true }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Article, Books, Snippet],
  mdx: md_default
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-AINQLFSH.mjs.map
