
// config/md.ts
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import remarkExternalLinks from 'remark-external-links';
import rehypeImgSize from 'rehype-img-size';
import { Pluggable } from 'unified';
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrism from 'rehype-prism-plus'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

const mdxOptions = {
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
            className: ['anchor']
          }
        }
      ],
    [
      rehypeImgSize,
      {
        dir: 'public',
      },
    ],
  ] as Pluggable[],
  compilers: [],
  format:'mdx'
};

export default mdxOptions;

