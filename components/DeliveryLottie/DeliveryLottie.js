import React from 'react';
import { useLottie } from 'lottie-react';
import animationData from './animationData.json';

const DeliveryLottie = () => {
  const options = {
    animationData,
    autoplay: true,
    initialSegment: [0, 120]
  };

  const { View } = useLottie(options);
  return (<div style={{ width: 100, height: 100, }}>
    { View }
  </div>);
};

export default DeliveryLottie;
