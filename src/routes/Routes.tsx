import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from './../layouts/MainLayout';
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement : <ErrorPage/>,
      children : [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about-us",
            element: <AboutUs/>
        },
        {
            path: "/all-products",
            element: <Products/>
        },
        {
            path: "/cart",
            element: <Cart/>
        },
        {
            path: "/checkout",
            element: <Checkout/>
        },
      ]
    },
    {
      path: "dashboard",
      element: <DashboardLayout/>,
      errorElement : <ErrorPage/>,
      children : [
        {
            path: "",
            element: <Dashboard/>
        },
        {
            path: "dashboard/add-product",
            element: <Dashboard/>
        },
      ]
    },
  ]);