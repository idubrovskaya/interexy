import React from 'react';
import { MenusList } from './menus-list';
import { MenusRoutes } from 'app/router/menus.routes';

export default function MenusPage() {
  return (
    <div className='menus__page'>
      <h2>Menus</h2>
      <MenusList />
      <MenusRoutes />
    </div>
  );
}
