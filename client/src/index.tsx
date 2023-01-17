import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './pages/app/App';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './styles/theme.scss';
import './styles/global.scss'
import Logout from './pages/logout/Logout';
import Home from './pages/home/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/app',
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
  {
    path: '/logout',
    element: <Logout />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);