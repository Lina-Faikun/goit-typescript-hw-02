import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

type ImageType = {
  id: string;
  urls: {
    small: string;
  };
  alt_description?: string;
};

type GalleryProps = {
  images: ImageType[];
  onImageClick: (image: ImageType) => void;
};

const ImageGallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
