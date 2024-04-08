import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  GalleryPage,
  SchedulePage,
  BlogPage,
  PricingPage,
  ClassesPage,
  ContactPage,
  NotFoundPage,
  SignupPage,
  SigninPage,
} from './pages';
import { Gallery, Program } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
        children: [
          {
            path: '/gallery',
            element: <Navigate to={'/gallery/1'} replace={true} />,
          },
          {
            path: '/gallery/:pageNumber',
            element: <Gallery />,
          },
        ],
      },
      {
        path: '/schedule',
        element: <SchedulePage />,
        children: [
          {
            path: '/schedule',
            element: <Navigate to={'/schedule/mon'} replace={true} />,
          },
          {
            path: '/schedule/:day',
            element: <Program />,
          },
        ],
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/pricing',
        element: <PricingPage />,
      },
      {
        path: '/classes',
        element: <ClassesPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/login',
        element: <SigninPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
