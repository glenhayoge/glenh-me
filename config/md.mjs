import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkGfm from 'remark-gfm'
import remarkExternalLinks from 'remark-external-links'

export default {
  remarkPlugins: [
    remarkGfm,
    [remarkExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }],
  ],
  rehypePlugins: [
    rehypeCodeTitles,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ['anchor'],
        },
      },
    ],
    [
      rehypePrismPlus,
      {
        ignoreMissing: true,
        showLineNumbers: true,
      },
    ],
  ],
} 