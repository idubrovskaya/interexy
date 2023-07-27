import React from 'react';
import { AnimationsMenu } from './animations-menu';
import { AnimationsRoutes } from '../router/animation.routes';

export default function AnimationsPage() {
  return (
    <div className='animation__page'>
      <h2>Animations</h2>
      <AnimationsMenu />
      <AnimationsRoutes />
    </div>
  );
}
