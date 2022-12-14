import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Link, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Register from './Register';
import './theme.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <div>Login, you can register <Link to='/register'>here</Link></div>
  },
  {
    path: '/register',
    element: <Register />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RouterProvider router={router} />
);