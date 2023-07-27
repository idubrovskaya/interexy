import React from 'react';
import { render } from '@testing-library/react';
import { AppRoutes } from './app.routes';

// Мок функции window.addEventListener и window.removeEventListener
window.addEventListener = jest.fn();
window.removeEventListener = jest.fn();

describe('AppRoutes', () => {
  test('должен добавить обработчик события resize при монтировании', () => {
    render(<AppRoutes />);

    // Ожидаем, что window.addEventListener был вызван с аргументами 'resize' и функцией
    expect(window.addEventListener).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });

  test('должен удалять обработчик события resize при размонтировании', () => {
    const { unmount } = render(<AppRoutes />);
    unmount();

    // Ожидаем, что window.removeEventListener был вызван с аргументами 'resize' и функцией
    expect(window.removeEventListener).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });

  // Другие тесты на проверку условных рендеров на основе windowWidth
  // можно выполнить, эмулируя различные значения ширины окна.

  // Тесты на проверку, что компоненты MainLayout, AnimationsPage и т.д. рендерятся
  // в зависимости от условий, можно выполнить с помощью @testing-library/react.

  // Пример:
  test('должен рендерить компонент MainLayout на корневом пути', () => {
    const { getByText } = render(<AppRoutes />);

    const mainLayoutElement = getByText('Контент главной страницы');
    expect(mainLayoutElement).toBeInTheDocument();
  });
});
