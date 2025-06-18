// import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
<<<<<<< HEAD
import readingTime from 'reading-time'
import mdxOptions from './config/md.mjs'
=======
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files';
import readingTime from 'reading-time';
>>>>>>> working-commit
import GithubSlugger from 'github-slugger'
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files';
// import rehypePrettyCode from 'rehype-pretty-code';
import rehypePrismPlus from 'rehype-prism-plus'

const Author = defineDocumentType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
<<<<<<< HEAD
    image: { type: 'string', required: true }
  }
}))
=======
    image: { type: 'string', required: true },
  },
}));
>>>>>>> working-commit

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
          headings.push({ text, slug, level: 2 });
        }
        if (line.startsWith('### ')) {
          const text = line.replace('### ', '');
          const slug = slugger.slug(text);
          headings.push({ text, slug, level: 3 });
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
      type: 'json',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
    caption: {
      type: 'string',
      required: true,
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('articles/', ''),
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
<<<<<<< HEAD
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('snippets/', ''),
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
=======
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
    author: { type: 'string', required: true }
>>>>>>> working-commit
  },
}))

export default makeSource({
  contentDirPath: 'data',
<<<<<<< HEAD
  documentTypes: [Article, Books, Snippet],
  mdx: mdxOptions,
=======
  documentTypes: [Article, Book, Snippet],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
    format: 'mdx',
  },
>>>>>>> working-commit
  exclude: ["**/*.json", "siteMapdata.json"],
  disableImportAliasWarning: true,
  fileExtensions: ['mdx', 'md'],
  esm: false
<<<<<<< HEAD
})
=======
});
>>>>>>> working-commit
