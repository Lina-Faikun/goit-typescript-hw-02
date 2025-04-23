// components/ImageModal/ImageModal.tsx
import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { UnsplashImage } from '../../types'; 

Modal.setAppElement('#root');

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: UnsplashImage | null;
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {image ? (
        <>
          <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
          <p>Автор: {image.user?.name || 'Невідомо'}</p>
          <p>Лайків: {image.likes ?? 0}</p>
        </>
      ) : (
        <p>Зображення не доступне</p>
      )}

      <button className={styles.closeButton} onClick={onClose}>Закрити</button>
    </Modal>
  );
};

export default ImageModal;
