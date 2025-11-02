import { allArticles } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { select } from '../../utils/select';

export default function CategoriesPage({ categories }) {
  return (
    <>
      <NextSeo
        title="Article Categories - Glen G Hayoge"
        description="Browse all article categories organized alphabetically"
      />
      
      <section className="py-24">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-8 block text-left text-4xl px-2 font-black leading-10 tracking-tight dark:text-yellow-400 text-gray-600 sm:text-4xl">
              Article Categories
            </h1>
            
            <div className="px-2 mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                Browse articles by category. Click on any category to view all articles in that category.
              </p>
            </div>

            <div className="px-2 space-y-8">
              {Object.keys(categories).sort().map((letter) => (
                <div key={letter} className="border-b border-neutral-200 dark:border-neutral-800 pb-6 last:border-b-0">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                    {letter}
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {categories[letter].map((category) => (
                      <Link
                        key={category.name}
                        href={`/article/category/${encodeURIComponent(category.name)}`}
                        className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group"
                      >
                        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                          {category.name}
                        </span>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded-full">
                          {category.count} {category.count === 1 ? 'article' : 'articles'}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function getStaticProps() {
  // Get all unique categories with their counts
  const categoryMap = {};
  
  allArticles.forEach((article) => {
    const category = article.category;
    if (category) {
      if (!categoryMap[category]) {
        categoryMap[category] = 0;
      }
      categoryMap[category]++;
    }
  });

  // Group categories by first letter
  const categoriesByLetter = {};
  
  Object.keys(categoryMap)
    .sort()
    .forEach((categoryName) => {
      const firstLetter = categoryName.charAt(0).toUpperCase();
      if (!categoriesByLetter[firstLetter]) {
        categoriesByLetter[firstLetter] = [];
      }
      categoriesByLetter[firstLetter].push({
        name: categoryName,
        count: categoryMap[categoryName],
      });
    });

  return {
    props: {
      categories: categoriesByLetter,
    },
  };
}

