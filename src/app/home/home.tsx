import { CheckboxMenu } from 'app/menus/components/CheckboxMenu';
import { DropdownMenu } from 'app/menus/components/DropdownMenu';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <div>
      <CheckboxMenu />
      <DropdownMenu />
    </div>
  );
};
