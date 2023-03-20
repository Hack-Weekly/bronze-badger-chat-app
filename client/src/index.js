import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import ErrorPage from 'pages/404';

import './App.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
