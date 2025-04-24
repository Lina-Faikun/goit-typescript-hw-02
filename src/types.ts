export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;   
    full: string;
    regular: string;
  };
  user: {  
    name: string;  
  };
  likes?: number; 
}
