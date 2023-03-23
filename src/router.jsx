import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';

import Test from './pages/Test';
import TestApi from './pages/Test/Api';
import TestRecoil from './pages/Test/Recoil';

export const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Navigate to={'/main'} />,
  },

  {
    path: '/main',
    index: true,
    element: <Main />,
  },

  {
    path: '/login',
    index: true,
    element: <Login />,
  },

  // Test Path Routing
  {
    path: '/test',
    children: [
      {
        path: '',
        index: true,
        element: <Test />,
      },
      {
        path: 'api',
        index: true,
        element: <TestApi />,
      },
      {
        path: 'recoil',
        index: true,
        element: <TestRecoil />,
      },
    ],
  },
]);