import React, { useLayoutEffect, useRef, MutableRefObject } from 'react';

import '../../../assets/style.scss';
import useFrameAnimation from 'app/hooks/use-frame-animation';

export const RequestAnimationFrame = () => {
  const parentRef: MutableRefObject<HTMLDivElement | undefined> = useRef(null);
  const squareRef: MutableRefObject<HTMLDivElement | undefined> = useRef(null);

  useFrameAnimation({ parentRef, squareRef });

  return (
    <div>
      <div ref={parentRef} className='square-animation-frame'>
        <h3>Request animation frame</h3>
        <div ref={squareRef} className='square'></div>
      </div>
    </div>
  );
};
