import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Link, createBrowserRouter } from 'react-router-dom';
import App from './pages/app/App';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './styles/theme.scss';

const router = createBrowserRouter([
  {
    path: '/',
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
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RouterProvider router={router} />
);