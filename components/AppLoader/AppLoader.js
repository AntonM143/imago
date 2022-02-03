import React from 'react';
import { useLottie } from 'lottie-react';
import animationData from './loader.json';
import styles from './AppLoader.module.scss';

const options = {
  animationData: animationData,
  loop: true,
  autoplay: true,
};

const AppLoader = () => {
  const { View } = useLottie(options) 
  return <div className={styles.loaderContainer}>
    <div className={styles.viewContainer}>
      {View}
    </div>
  </div>;
};

export default AppLoader;
