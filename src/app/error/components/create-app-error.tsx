import React, { useEffect, useState } from 'react';
import '../../../assets/style.scss';

export const CreateAppError = () => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    <>
      <button onClick={onThrow} className='open__btn'>
        CRUSH THE APP
      </button>
    </>
  );
};
