import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Link, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Register from './Register';
import './theme.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/register',
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