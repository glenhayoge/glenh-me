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

// contentlayer.config.js
import rehypeSlug2 from "rehype-slug";
import GithubSlugger from "github-slugger";
var Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true }
  }
}));
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
var Books = defineDocumentType(() => ({
  name: "Book",
  filePathPattern: `books/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    category: { type: "string", required: true },
    description: { type: "string", required: true },
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
var contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article, Books],
  mdx: {
    rehypePlugins: [rehypeSlug2]
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4SYUW2VJ.mjs.map
