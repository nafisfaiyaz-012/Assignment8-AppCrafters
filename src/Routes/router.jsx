import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import { Component } from "react";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import NoAppFound from "../Components/NoSearchAppFound";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path:'/appdetails/:id',
        Component: AppDetails
      }
    ],
  },
]);
export default router;
