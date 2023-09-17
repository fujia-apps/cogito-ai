import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from 'pages/Home';
import { PaddlePage } from 'pages/Paddle';
import { SettingPage } from 'pages/Setting';

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/settings',
    element: <SettingPage />,
  },
  {
    path: '/paddle',
    element: <PaddlePage />
  }
]);

