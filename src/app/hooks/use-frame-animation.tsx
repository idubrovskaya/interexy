import React, { useRef, MutableRefObject, useLayoutEffect } from 'react';

interface IUseFrameAnimationProps {
  parentRef: MutableRefObject<HTMLDivElement | undefined>;
  squareRef: MutableRefObject<HTMLDivElement | undefined>;
}

function useFrameAnimation({ parentRef, squareRef }: IUseFrameAnimationProps) {
  let position = 0;
  let direction = 6;

  const animateSquare = () => {
    if (parentRef.current && squareRef.current) {
      position += direction;
      squareRef.current.style.left = `${position}px`;
      if (
        position >=
          parentRef.current.getBoundingClientRect().width -
            squareRef.current.getBoundingClientRect().width ||
        position <= 0
      ) {
        direction *= -1;
      }
      requestAnimationFrame(animateSquare);
    }
  };
  useLayoutEffect(() => {
    animateSquare();
  }, []);
}

export default useFrameAnimation;
