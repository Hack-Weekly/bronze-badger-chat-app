import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Register, Login, Chat, ErrorPage } from 'pages';
import { AuthProvider, RequireAuth } from 'react-auth-kit';


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
  {
    path: '/chat',
    element: <RequireAuth loginPath='/login'><Chat /></RequireAuth>,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <AuthProvider
      authType='cookie'
      authName='_auth'
      cookieDomain={window.location.hostname}
      cookieSecur={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
