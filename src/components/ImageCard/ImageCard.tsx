import React from 'react';
import styles from './ImageCard.module.css';
import { UnsplashImage } from '../../types'; 

type ImageCardProps = {
  image: UnsplashImage;
  onClick: (url: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.urls.full); 
  };

  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        onClick={handleClick}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
