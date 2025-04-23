import React from 'react';
import { CircleLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <CircleLoader size={50} color="#00f" />
    </div>
  );
};

export default Loader;
