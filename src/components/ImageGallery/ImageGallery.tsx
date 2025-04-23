
import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';
import { UnsplashImage } from '../../types'; 

type ImageGalleryProps = {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
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
