import React, { MutableRefObject, useLayoutEffect, useRef } from 'react';

import '../../../assets/style.scss';
import UseSetTimeoutAnimation from 'app/hooks/use-settimeout-animation';

export const SettimeoutAnimation = () => {
  const containerRef: MutableRefObject<HTMLDivElement | undefined> =
    useRef(null);
  const squareRef: MutableRefObject<HTMLDivElement | undefined> = useRef(null);

  UseSetTimeoutAnimation({ containerRef, squareRef });

  return (
    <div>
      <div ref={containerRef} className='square__settimeout'>
        <h3>SetTimeout animation</h3>
        <div ref={squareRef} className='square'></div>
      </div>
    </div>
  );
};
