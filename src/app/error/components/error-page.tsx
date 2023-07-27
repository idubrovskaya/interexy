import React from 'react';
import '../../../assets/style.scss';

export const ErrorPage = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className='circles'>
      <p>
        404
        <br />
        <small>PAGE NOT FOUND</small>
      </p>
      <span className='circleBig'></span>
      <span className='circleMed'></span>
      <span className='circleSmall'></span>
      <button onClick={reloadPage} className='open__btn'>
        Reload the page
      </button>
    </div>
  );
};
