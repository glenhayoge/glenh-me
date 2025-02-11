import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1698700654311-8b8b2b05e227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODcyNTUxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    alt: "A Bulb Onion Plot, WHP",
    link: "https://images.unsplash.com/photo-1698700654311-8b8b2b05e227",
  },
  {
    src: "https://images.unsplash.com/photo-1698700654109-825adf37f6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODcyNDUwNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    alt: "An Array of Tomatoes, EHP",
    link: "https://images.unsplash.com/photo-1698700654109-825adf37f6c6",
  },
  {
    src: "https://images.unsplash.com/photo-1698700654105-d4e75360dc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODcyNTM3OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    alt: "A Child Walking Home, EHP",
    link: "https://images.unsplash.com/photo-1698700654105-d4e75360dc99",
  },
  {
    src: "https://images.unsplash.com/photo-1698700654176-c42201d7ba49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODcyNTEyMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    alt: "A Village Hut, WHP",
    link: "https://images.unsplash.com/photo-1698700654176-c42201d7ba49",
  },
];

export default function Photography() {
  return (
    <div className="container mx-auto w-full mt-2 rounded-lg">
      <div className="pt-8 mb-8 px-4 text-gray-600 mx-4 lg:mx-0">
        <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">
          Designs, Illustrations & Photography
        </p>
        <p className="text-sm text-gray-400 mt-3">
          Drawings, designs I created and photographs I took
        </p>
      </div>
      <div className="flex flex-wrap -m-4 text-center p-4">
        {photos.map((photo, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="flex justify-center">
              <div className="rounded max-w-sm mx-4 lg:mx-0 bg-gray-300/25 dark:bg-gray-700/25 outline-gray-200 dark:outline-gray-600">
                <Link href={photo.link} target="_blank" rel="noreferrer">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={400}
                    className="rounded-t-lg"
                  />
                </Link>
                <div className="p-3">
                  <h5 className="text-gray-500 text-sm font-medium">{photo.alt}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="https://unsplash.com/@glenhayoge" className="mx-4 lg:mx-0">
        <button className="text-sm button text-gray-400 mx-3 mt-3 p-2 border rounded border-gray-500">
          View More Photos
        </button>
      </Link>
    </div>
  );
}
