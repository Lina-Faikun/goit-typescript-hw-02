import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import ParentComponent from './components/ParentComponent';
import { fetchImages } from './services/unsplash-api';
import { UnsplashImage } from './services/unsplash-api';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const perPage = page === 1 ? 40 : 20;
      try {
        const data = await fetchImages(query, page, perPage);
        setImages((prevImages) =>
          page === 1 ? data.results : [...prevImages, ...data.results]
        );
      } catch (err) {
        setError('Something went wrong!');
        console.error('Error fetching images:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="app-container">
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ParentComponent images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
