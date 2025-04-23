import React, { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import { UnsplashImage } from '../../services/unsplash-api';

interface Props {
  images: UnsplashImage[];
}

const ParentComponent: React.FC<Props> = ({ images }) => {
  console.log('Images received in ParentComponent:', images); // Для перевірки

  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <div>
      <ImageGallery images={images} onImageClick={handleImageClick} />
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </div>
  );
};

export default ParentComponent;
