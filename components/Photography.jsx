import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Loader2 } from "lucide-react";

export default function Photography() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const response = await fetch('/api/unsplash-photos');
        
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setPhotos(data.photos || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError(err.message);
        // Fallback to empty array on error
        setPhotos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);
  return (
    <div className="container mx-auto w-full mt-2 rounded-lg">
      <div className="pt-8 mb-8 px-4 text-gray-600 mx-4 lg:mx-0">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance text-neutral-900 dark:text-neutral-50">
          Designs, Illustrations & Photography
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          Drawings, designs I created and photographs I took
        </p>
      </div>
      {loading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500 dark:text-gray-400" />
          <span className="ml-3 text-gray-600 dark:text-gray-400">Loading photos...</span>
        </div>
      )}

      {error && (
        <div className="mx-4 lg:mx-0 mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-200 text-sm">
            Error loading photos: {error}
          </p>
          <p className="text-red-600 dark:text-red-300 text-xs mt-2">
            Please check that UNSPLASH_ACCESS_KEY and UNSPLASH_USERNAME are set in your environment variables.
          </p>
        </div>
      )}

      {!loading && !error && photos.length === 0 && (
        <div className="mx-4 lg:mx-0 mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            No photos found. Please check your Unsplash username configuration.
          </p>
        </div>
      )}

      {!loading && photos.length > 0 && (
        <div className="px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <Link 
                  href={photo.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="block relative w-full flex-1 min-h-0"
                >
                  <div className="relative w-full h-full min-h-[250px] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800">
                    <h5 className="text-gray-700 dark:text-gray-300 text-sm font-medium line-clamp-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                      {photo.alt}
                    </h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-12 flex justify-end">
      <Link href="https://unsplash.com/@glenhayoge" className="inline-flex items-center gap-1.5 rounded-md bg-neutral-500 px-4 mx-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
          View More Photos 
          <ExternalLink className="h-4 w-4" />
      </Link>
      </div>
    </div>
  );
}
