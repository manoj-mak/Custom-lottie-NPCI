import React from 'react';
import Lottie from 'lottie-react';
import animationData from '/src/assets/npci.json';

function LottieAnimation() {
    return (
      <div className="animation-wrapper">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    );
  }
  

export default LottieAnimation;
