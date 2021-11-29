import React, { useState } from 'react';
import styles from './error-popup.module.scss';
import { TIMEOUT_DELAY } from './constants';
import { useTimeout } from '../../other/hooks/useTimeout';

export const ErrorPopup = ({ errorMessage }) => {
  const [showPopup, setShowPopup] = useState(true);
  const handlerClosePopup = () => setShowPopup(false);

  useTimeout(handlerClosePopup, TIMEOUT_DELAY);

  return (
    showPopup && (
      <div className={styles.wrapper}>
        <p>{errorMessage}</p>
      </div>
    )
  );
};
