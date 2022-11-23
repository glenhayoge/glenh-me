import Image from 'next/image';

export const SingleArticle = ({ author, image, category, title, children }) => {
  return (
    <div className='px-4 py-24'>
      <div className='mx-auto max-w-prose'>
        <p className='block text-center text-base font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200'>
          {category}
        </p>
        <h1 className='mt-2 block text-center text-3xl font-bold leading-8 tracking-normal dark:text-yellow-400 text-gray-900 sm:text-4xl'>
          {title}
        </h1>
        <br />
        <Image
          className='lg:h-48 md:h-36 w-full object-cover object-center'
          src={image}
          width={720}
          height={400}
          alt='blog'
        />
        <hr />
        <br />
        <div className='flex items-center'>
          <Image src={author.image} width={50} height={50} alt='blog' 
          className='rounded px-2'
          />

          <div>
            <strong>{author.name}</strong>
            <br />
            <span>Technical advisor</span>
          </div>
        </div>
        <article className='mx-autotext-gray-500 dark:text-gray-200 prose-md prose prose-indigo py-24 lg:prose-lg'>
          {children}
        </article>
      </div>
    </div>
  );
};