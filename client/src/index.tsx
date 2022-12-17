import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './pages/app/App';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './styles/theme.scss';
import Logout from './pages/logout/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World</h1>
  },
  {
    path: '/app',
    element: <App />
  },
  {
    path: '/signup',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/logout',
    element: <Logout />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RouterProvider router={router} />
);