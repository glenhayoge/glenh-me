// API route to fetch user's photos from Unsplash
export default async function handler(req, res) {
  // Get Unsplash API credentials from environment variables
  const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
  const UNSPLASH_USERNAME = process.env.UNSPLASH_USERNAME || 'glenhayoge';

  if (!UNSPLASH_ACCESS_KEY) {
    return res.status(500).json({ 
      error: 'Unsplash API key not configured. Please set UNSPLASH_ACCESS_KEY in your environment variables.' 
    });
  }

  try {
    // Fetch user's photos directly using username (ordered by latest, per_page=10)
    const photosResponse = await fetch(
      `https://api.unsplash.com/users/${UNSPLASH_USERNAME}/photos?client_id=${UNSPLASH_ACCESS_KEY}&per_page=8&order_by=latest`
    );

    if (!photosResponse.ok) {
      const errorData = await photosResponse.json().catch(() => ({}));
      const errorMessage = errorData.errors?.[0] || photosResponse.statusText;
      throw new Error(`Failed to fetch photos: ${errorMessage} (Status: ${photosResponse.status})`);
    }

    const photos = await photosResponse.json();
    
    // Handle case where API returns an error object instead of array
    if (photos.errors) {
      throw new Error(photos.errors[0] || 'Unknown error from Unsplash API');
    }

    // Transform the data to match the component's expected format
    const transformedPhotos = photos.map((photo) => ({
      src: photo.urls.regular || photo.urls.full,
      alt: photo.description || photo.alt_description || 'Unsplash Photo',
      link: photo.links.html,
      id: photo.id,
      width: photo.width,
      height: photo.height,
      aspectRatio: photo.width && photo.height ? photo.width / photo.height : 1,
    }));

    // Cache for 1 hour (3600 seconds)
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json({ photos: transformedPhotos });
  } catch (error) {
    console.error('Error fetching Unsplash photos:', error);
    res.status(500).json({ 
      error: 'Failed to fetch photos from Unsplash',
      message: error.message 
    });
  }
}

