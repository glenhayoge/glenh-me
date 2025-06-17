
import BookList from "../components/BookList";
import { allBooks } from "contentlayer/generated";
import { select } from "../utils/select";
import { useEffect } from "react";
import ProfileBadge from "../components/ProfileBadge";

import Subscribe from "../components/Subscribe";

export default function BookPage({ books }) {

  useEffect(() => { }, []);
  return (
   
      <div>
      <section className="py-20 ">
        <div className="container px-4 lg:px-12 sm:px-4 mx-auto">
          <div className="flex flex-wrap items-stretch -m-6">
            <div className="w-full lg:w-8/12  lg:pl-12 md:px-8 ">
              <div className=" px-6 overflow-hidden">
                <div className="pt-1 pb-1  ">
                  <div className="flex mb-4 justify-between items-center">
                    <div className="pt-2 px-3  text-gray-600">
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-600 dark:text-gray-400">
                      Book List.
                      </p>
                      <p className="text-sm  text-gray-600 my-6">
                    Below are notes, summaries &amp; personal ratings of books I have read.
                  </p>
                    </div>
                  </div>
                </div>
          
                <main>
                    {books.map(
                      ({
                        title,
                        description,
                        slug,
                        image,
                        category,
                        publishedAt,
                        author,

                      }) => (
                        <BookList
                          key={slug}
                          title={title}
                          description={description}
                          slug={slug}
                          category={category}
                          author={author}
                          date={publishedAt}
                          image={image}

                        />
                      )
                    )}
                  </main>
              </div>
            </div>
           
            <div className="w-full lg:w-4/12  lg:pr-20 md:px-8 ">
             <ProfileBadge/>
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </div>

    
  );


}

export function getStaticProps() {
  const books = allBooks
    .map((book) =>
      select(book, [
        "slug",
        "title",
        "description",
        "category",
        "image",
        "publishedAt",
        "author",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { books } };
}

