import React from "react";
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from"react-router-dom";
import Home from "./Views/Home/Home";
import Registration from "./Views/Registration/Registration";
import About from "./Views/About/About";
import Gallery from "./Views/Gallery/Gallery";

const router = createBrowserRouter ([
  { path: '/', element: <Home /> },
  { path: 'registration', element: <Registration /> },
  { path: 'about', element: <About /> },
  { path: 'gallery', element: <Gallery /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
