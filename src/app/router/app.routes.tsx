import { AnimationTransition } from 'app/animations/components/animation-transition';
import { RequestAnimationFrame } from 'app/animations/components/request-animation-frame';
import { SettimeoutAnimation } from 'app/animations/components/settimeout-animation';
import React, { useEffect, useState, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import { MainLayout } from 'app/layouts/main-layout';
import { AnimationKeyframes } from 'app/animations/components/animation-keyframes';
import { DropdownMenu } from 'app/menus/components/DropdownMenu';
import { CheckboxMenu } from 'app/menus/components/CheckboxMenu';
import AnimationErrorBoundary from 'app/animations/animation-error-boundary';

const AnimationsPage = lazy(() => import('app/animations/animations-page'));
const MenusPage = lazy(() => import('app/menus/menus-page'));

export const AppRoutes = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Routes>
      <Route path='/' element={<MainLayout />} />
      {windowWidth > 722 && (
        <>
          <Route path='animation/*' element={<AnimationsPage />} />
          <Route path='menu/*' element={<MenusPage />} />
        </>
      )}
      {windowWidth <= 722 && (
        <>
          <Route
            path='animation/animation-keyframes'
            element={<AnimationKeyframes />}
          />
          <Route />
          <Route
            path='animation/animation-transition'
            element={
              <AnimationErrorBoundary>
                <AnimationTransition />
              </AnimationErrorBoundary>
            }
          />
          <Route
            path='animation/request-animation-frame'
            element={<RequestAnimationFrame />}
          />
          <Route
            path='animation/settimeout-animation'
            element={<SettimeoutAnimation />}
          />
          <Route path='menu/dropdown-menu' element={<DropdownMenu />} />
          <Route path='menu/checkbox-menu' element={<CheckboxMenu />} />
        </>
      )}
    </Routes>
  );
};
