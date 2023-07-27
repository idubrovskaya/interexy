import React, { useEffect, useState } from 'react';

import '../../../assets/style.scss';

export const AnimationKeyframes = () => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error('ERROR');
    }
  }, [error]);

  return (
    <div className='animation__container'>
      <h3>Animation keyframes</h3>
      <div className='square__wrapper'>
        <div className='square__animation'></div>
      </div>
      <button onClick={onError} className='open__btn'>
        Make an error
      </button>
    </div>
  );
};
