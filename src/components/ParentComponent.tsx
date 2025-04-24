import React, { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import { UnsplashImage } from '../services/unsplash-api';  

interface Props {
  images: UnsplashImage[]; 
}

const ParentComponent: React.FC<Props> = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(null);

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </>
  );
};

export default ParentComponent;
