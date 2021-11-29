import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Loader type="Oval" color="#000" height={30} width={30} />
    </div>
  );
};
