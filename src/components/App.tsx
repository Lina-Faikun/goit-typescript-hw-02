import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import ParentComponent from './components/ParentComponent';
import { fetchImages } from './services/unsplash-api';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const perPage = page === 1 ? 40 : 20;
      try {
        console.log(`Fetching data for query: ${query}, page: ${page}`); // Для перевірки
        const data = await fetchImages(query, page, perPage);
        console.log('Fetched images:', data); // Для перевірки
        setImages((prevImages) =>
          page === 1 ? data.results : [...prevImages, ...data.results]
        );
      } catch (err) {
        setError('Something went wrong!');
        console.error('Error fetching images:', err); // Для перевірки
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
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
}

export default App;
