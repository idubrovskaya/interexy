import React, { MutableRefObject, useRef, useLayoutEffect } from 'react';

interface IUseSetTimeoutAnimationProps {
  containerRef: MutableRefObject<HTMLDivElement | undefined>;
  squareRef: MutableRefObject<HTMLDivElement | undefined>;
}

const UseSetTimeoutAnimation = ({
  containerRef,
  squareRef,
}: IUseSetTimeoutAnimationProps) => {
  let setTimeoutPosition = 0;
  let setTimeoutDirection = 2;

  const animationInterval = 10;

  const animateSquareWithSetTimeout = () => {
    const containerWidth =
      containerRef.current?.getBoundingClientRect().width ?? 0;
    const squareWidth = squareRef.current?.getBoundingClientRect().width ?? 0;
    setTimeoutPosition += setTimeoutDirection;

    if (squareRef.current) {
      squareRef.current.style.left = `${setTimeoutPosition}px`;
      if (
        setTimeoutPosition >= containerWidth - squareWidth ||
        setTimeoutPosition <= 0
      ) {
        setTimeoutDirection *= -1;
      }
    }
    setTimeout(animateSquareWithSetTimeout, animationInterval);
  };

  useLayoutEffect(() => {
    animateSquareWithSetTimeout();
  }, []);
};

export default UseSetTimeoutAnimation;
