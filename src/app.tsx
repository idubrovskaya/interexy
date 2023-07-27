import React, { Suspense, useState } from 'react';

import './app.css';
import { AppRoutes } from 'app/router/app.routes';
import { Navbar } from 'components/navbar/navbar';
import Drawer from 'app/drawer/drawer';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <div className={windowWidth > 722 ? 'container' : 'container__phone'}>
      {windowWidth > 722 ? (
        <Suspense fallback='loading'>
          <Navbar />
          <AppRoutes />
          <Drawer />
        </Suspense>
      ) : (
        <Suspense fallback='loading'>
          <Drawer />
          <AppRoutes />
        </Suspense>
      )}
    </div>
  );
}

export default App;
