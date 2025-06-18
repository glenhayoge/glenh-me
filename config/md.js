import rehypePrismPlus from 'rehype-prism-plus';

export default {
  remarkPlugins: [],
  rehypePlugins: [
    [
      rehypePrismPlus,
      {
        ignoreMissing: true,
        showLineNumbers: true,
        lineNumbers: true,
        defaultLanguage: 'javascript',
      },
    ],
  ],
}; 