import React, { useState, useEffect, useRef } from 'react';
import { AnimationsMenu } from 'app/animations/animations-menu';
import { MenusList } from 'app/menus/menus-list';
import '../../assets/style.scss';

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className=''>
      {windowWidth <= 722 && (
        <button onClick={handleToggle} className='open__btn'>
          Open menu
        </button>
      )}

      {isOpen && (
        <div ref={drawerRef} className={`drawer ${isOpen ? 'open' : ''}`}>
          <AnimationsMenu />
          <MenusList />
        </div>
      )}
    </div>
  );
};

export default Drawer;
