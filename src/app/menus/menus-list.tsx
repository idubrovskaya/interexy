import React from 'react';
import { Link } from 'react-router-dom';

const menuDesktop = [
  { name: 'Dropdown menu', path: 'dropdown-menu' },
  { name: 'Checkbox-menu', path: 'checkbox-menu' },
];

const menuPhone = [
  { name: 'Dropdown menu', path: 'menu/dropdown-menu' },
  { name: 'Checkbox-menu', path: 'menu/checkbox-menu' },
];

export const MenusList: React.FC = () => {
  const menu = window.innerWidth > 722 ? menuDesktop : menuPhone;

  return (
    <div className='menus__list'>
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
