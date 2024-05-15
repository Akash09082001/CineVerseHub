import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Protected from './components/Protected';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import AllPosts from './pages/AllPost';
import Post from './pages/Post';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/login",
        element: <Login />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/",
        element: <Protected />,
        children: [
          {
            path: "/",
            index: true,
            element: <Home />,
            errorElement: <PageNotFound />,
          },
          {
            path: "/dashboard",
            index: true,
            element: <Dashboard />,
            errorElement: <PageNotFound />,
          },
          {
            path: "/home",
            index: true,
            element: <Home />,
            errorElement: <PageNotFound />,
          },
          {
            path: "/posts",
            element: <AllPosts />,
            errorElement: <PageNotFound />,
          },
          {
            path: "/posts/:slug",
            element: <Post />,
            errorElement: <PageNotFound />,
          },
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);