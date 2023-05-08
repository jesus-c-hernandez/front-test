import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Customers, AboutMe } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Customers />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/about-me',
    element: <AboutMe />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
