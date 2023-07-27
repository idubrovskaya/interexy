import React from 'react';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'app/error/error-boundary';
import { ThemeProvider } from '@mui/material';
import { theme } from 'themes';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import { store } from 'store';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение'
  );
}

// window.addEventListener('load', async () => {
//   if (navigator.serviceWorker) {
//     await navigator.serviceWorker.register('./service-worker.js');
//   }
// });

const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </ThemeProvider>
);

serviceWorkerRegistration.register();
