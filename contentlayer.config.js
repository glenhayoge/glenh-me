
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files';
import readingTime from 'reading-time';
import GithubSlugger from 'github-slugger'
import rehypePrismPlus from 'rehype-prism-plus'

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
}));

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^(articles|books|snippets)\//, ''),
  },
  readingTime: { 
    type: 'json', 
    resolve: (doc) => readingTime(doc.body.raw) 
  },
  headings: {
    type: 'json',
    resolve: (doc) => {
      const slugger = new GithubSlugger();
      const headings = [];
      const lines = doc.body.raw.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('## ')) {
          const text = line.replace('## ', '');
          const slug = slugger.slug(text);
          headings.push({ text, slug, level: 'two' });
        }
        if (line.startsWith('### ')) {
          const text = line.replace('### ', '');
          const slug = slugger.slug(text);
          headings.push({ text, slug, level: 'three' });
        }
      }
      return headings;
    },
  },
}

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    seoDescription: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'nested',
      of: Author,
    },
    image: {
      type: 'string',
      required: true,
    },
    caption: {
      type: 'string',
      required: true,
    },
    toc: {
      type: "boolean",
      required: true,
      default: true,
    },
  },
  computedFields,
}))

export const Books = defineDocumentType(() => ({
  name: 'Books',
  filePathPattern: `books/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('books/', ''),
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => {
        const wordsPerMinute = 200;
        const words = doc.body.raw.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return { text: `${minutes} min read` };
      },
    },
  },
}))

export const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: `snippets/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    updatedAt: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: true,
    }
  },
  computedFields,
}));

const Book = defineDocumentType(() => ({
  name: 'Book',
  filePathPattern: `books/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    category: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    author: { type: 'string', required: true },
    tags: { type: 'string', required: true }
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Article, Book, Snippet],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrismPlus, { ignoreMissing: true }]
    ],
    format: 'mdx',
  },
  exclude: ["**/*.json", "siteMapdata.json"],
  disableImportAliasWarning: true,
  fileExtensions: ['mdx', 'md'],
  esm: false
});
