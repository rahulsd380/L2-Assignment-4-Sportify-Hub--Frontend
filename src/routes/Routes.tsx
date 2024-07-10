import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from './../layouts/MainLayout';
import AboutUs from "../pages/AboutUs";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children : [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about-us",
            element: <AboutUs/>
        },
      ]
    },
  ]);