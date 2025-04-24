import axios from 'axios';

const API_KEY = 'iu26jiH747BMEDs57GFdnImL9hktZ4Tv735NIthklMU';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;   // Виправлено на маленький розмір
    full: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes?: number; // Робимо likes необов'язковим
}

export interface UnsplashResponse {
  results: UnsplashImage[];
}

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 40
): Promise<UnsplashResponse> => {
  try {
    const response = await axios.get<UnsplashResponse>(BASE_URL, {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: API_KEY,
      },
    });
    console.log('Fetched from Unsplash API:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
