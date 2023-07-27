import { CreateAppError } from 'app/error/components/create-app-error';
import React from 'react';

export const MainLayout = () => {
  return (
    <div className='wrapper__layout'>
      <CreateAppError />
    </div>
  );
};
