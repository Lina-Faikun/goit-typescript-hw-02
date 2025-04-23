import React from 'react';
import styles from './ImageCard.module.css';

type ImageProps = {
  image: {
    urls: {
      small: string;
    };
    alt_description?: string;
  };
  onClick: () => void;
};

const ImageCard: React.FC<ImageProps> = ({ image, onClick }) => {
  const imageUrl = image?.urls?.small;

  if (!imageUrl) {
    return <div>Image not available</div>;
  }

  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt={image.alt_description || 'Image'}
        onClick={onClick}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
