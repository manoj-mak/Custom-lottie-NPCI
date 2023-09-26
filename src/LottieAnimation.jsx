import React from 'react';
import Lottie from 'lottie-react';
import animationData from '/src/assets/revised-npci.json';

function LottieAnimation() {
    return (
      <div className="animation-container">
      <Lottie animationData={animationData} loop autoplay />
    </div>
    );
  }
  

export default LottieAnimation;
