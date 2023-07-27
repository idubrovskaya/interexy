import React, { useState } from 'react';

import '../../../assets/style.scss';
import { Button, Menu, MenuItem } from '@mui/material';
import '../../../themes';
import { theme } from '../../../themes';

export const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='dropdown'>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant={'interexy-dropdown' as any}
      >
        Dropdown
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Link 1</MenuItem>
        <MenuItem onClick={handleClose}>Link 2</MenuItem>
        <MenuItem onClick={handleClose}>Link 3</MenuItem>
      </Menu>

      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant={'interexy-dropdown' as any}
      >
        Dropdown
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Link 1</MenuItem>
        <MenuItem onClick={handleClose}>Link 2</MenuItem>
        <MenuItem onClick={handleClose}>Link 3</MenuItem>
      </Menu>

      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant={'interexy-dropdown' as any}
      >
        Dropdown
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Link 1</MenuItem>
        <MenuItem onClick={handleClose}>Link 2</MenuItem>
        <MenuItem onClick={handleClose}>Link 3</MenuItem>
      </Menu>

      {/* <nav className='dropdown'>
        <div className='dropdown__block'>
          <button className='dropbtn'>Dropdown</button>
          <div className='dropdown__content'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
        </div>

        <div className='dropdown__block'>
          <button className='dropbtn'>Dropdown</button>
          <div className='dropdown__content'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
        </div>

        <div className='dropdown__block'>
          <button className='dropbtn'>Dropdown</button>
          <div className='dropdown__content'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
        </div>
      </nav> */}
    </div>
  );
};
