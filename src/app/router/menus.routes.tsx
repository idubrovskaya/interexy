import { CheckboxMenu } from 'app/menus/components/CheckboxMenu';
import { DropdownMenu } from 'app/menus/components/DropdownMenu';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const MenusRoutes = () => {
  return (
    <Routes>
      <Route path='dropdown-menu' element={<DropdownMenu />} />
      <Route path='checkbox-menu' element={<CheckboxMenu />} />
    </Routes>
  );
};
