import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Test from './pages/Test';

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

  {
    path: '/Test',
    index: true,
    element: <Test />,
  },

  // Auth Routes
  // {
  //   path: '/lobby',
  //   element: <AuthRoute/>,
  //   children: [
  //     {
  //       path: '',
  //       index: true,
  //       element: <Navigate to={'home'}/>,
  //     },
  //   ],
  // },
]);