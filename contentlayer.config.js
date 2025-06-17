// import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import mdxOptions from './config/md.mjs'
import GithubSlugger from 'github-slugger'
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files';
// import rehypePrettyCode from 'rehype-pretty-code';
import rehypePrismPlus from 'rehype-prism-plus'

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
}))

const computedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<data>.+)/g;
      const slugger = new GithubSlugger()
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const data = groups?.data;
            return {
              level: flag?.length == 1 ? "one"
              : flag?.length == 2 ? "two"
              : "three",
              text: data,
              slug: data ? slugger.slug(data) : undefined
            };
          }
        );
        return headings;
    },
  },
}

const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    seoDescription: { type: 'string', required: true },
    category: { type: 'string', required: true },
    tags: { type: 'string', required: true },
    caption: { type: 'string', required: true },
    author: {
      type: 'nested',
      of: Author,
    },
    image: { type: 'string', required: true },
    toc: {
      type: "boolean",
      required: true,
      default: true,
    },
  },
  computedFields,
}))

const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: `snippets/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    updatedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: { type: 'string', required: true },
    tags: { type: 'string', required: true },
  },
  computedFields,
}))

const Books = defineDocumentType(() => ({
  name: 'Book',
  filePathPattern: `books/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    category: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    author: { type: 'string', required: true }
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Article, Books, Snippet],
  mdx: mdxOptions,
  exclude: ["**/*.json", "siteMapdata.json"],
  disableImportAliasWarning: true,
  fileExtensions: ['mdx', 'md'],
  esm: false,
})
