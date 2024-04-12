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
import { ThemeProvider } from '@material-tailwind/react';
import { black } from 'tailwindcss/colors';
import AllPosts from './pages/AllPost';
import Post from './pages/Post';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="signup" element={<Signup />} />
//       <Route path="login" element={<Login />} />
//       <Route path="/" element={<Protected />} >
//         <Route path="/" index element={<Home />} />
//         <Route path="/home" index element={<Home />} />
//       </Route>
//     </Route>
//   )
// );
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

const customTheme = {
  black
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider value={customTheme} >
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);