import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimationKeyframes } from '../animations/components/animation-keyframes';
import { AnimationTransition } from '../animations/components/animation-transition';
import { RequestAnimationFrame } from '../animations/components/request-animation-frame';
import { SettimeoutAnimation } from '../animations/components/settimeout-animation';
import AnimationErrorBoundary from 'app/animations/animation-error-boundary';

export const AnimationsRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path='animation-keyframes'
        element={
          <AnimationErrorBoundary>
            <AnimationKeyframes />
          </AnimationErrorBoundary>
        }
      />
      <Route path='animation-transition' element={<AnimationTransition />} />
      <Route
        path='request-animation-frame'
        element={<RequestAnimationFrame />}
      />
      <Route path='settimeout-animation' element={<SettimeoutAnimation />} />
    </Routes>
  );
};
