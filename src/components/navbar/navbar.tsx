import React from 'react';
import '../../assets/style.scss';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <div className='navbar__container'>
      <Link to='/menu' className='navbar__link'>
        Menus
      </Link>
      <Link to='/animation' className='navbar__link'>
        Animations
      </Link>
    </div>
  );
};
