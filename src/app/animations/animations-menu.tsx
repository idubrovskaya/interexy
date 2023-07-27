import { Link } from 'react-router-dom';
import React from 'react';

const menuDesktop = [
  { name: 'Animation keyframes', path: 'animation-keyframes' },
  { name: 'Animation keyframes (transition)', path: 'animation-transition' },
  { name: 'Request animation frame', path: 'request-animation-frame' },
  { name: 'SetTimeout animation', path: 'settimeout-animation' },
];

const menuPhone = [
  { name: 'Animation keyframes', path: 'animation/animation-keyframes' },
  {
    name: 'Animation keyframes (transition)',
    path: 'animation/animation-transition',
  },
  {
    name: 'Request animation frame',
    path: 'animation/request-animation-frame',
  },
  { name: 'SetTimeout animation', path: 'animation/settimeout-animation' },
];

export const AnimationsMenu: React.FC = () => {
  const menu = window.innerWidth > 722 ? menuDesktop : menuPhone;
  return (
    <div className='animation__list'>
      <ul>
        {menu.map((item) => (
          <Link to={item.path} key={item.name}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
