import React from 'react';

import '../../../assets/style.scss';

export const AnimationTransition = () => {
  return (
    <div className='animation__container'>
      <h3>Keyframes animation (transition)</h3>
      <div className='square__wrapper'>
        <div className='square__transition'></div>
      </div>
    </div>
  );
};
