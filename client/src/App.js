import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Register, Login, ErrorPage } from 'pages';

import './App.css';

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
