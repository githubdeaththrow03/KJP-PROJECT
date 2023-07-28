import React from "react";
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from"react-router-dom";
import Registration from "./Views/Registration/Registration";
import About from "./Views/About/About";
import Gallery from "./Views/Gallery/Gallery";
import LandingPage from "./Views/LandingPage/LandingPage";
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import HomeAbout from './Views/HomeAbout/HomeAbout';
import AdminBoard from "./Views/AdminBoard/AdminBoard";
import ForgotPassword from "./Views/ForgotPass/ForgotPass";
import ResetPassword from "./Views/ResetPassword/ResetPassword";


const router = createBrowserRouter ([
  { path: '/', element: <LandingPage /> },
  { path: 'registration', element: <Registration /> },
  { path: 'about', element: <About /> },
  { path: 'gallery', element: <Gallery /> },
  { path: 'home', element: <Home /> },
  { path: 'login', element: <Login /> },
  { path: 'homeabout', element: <HomeAbout /> },
  { path: 'adminboard', element: <AdminBoard/> },
  { path: 'forgotpass', element: <ForgotPassword/> },
  { path: 'resetpass', element: <ResetPassword/> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
