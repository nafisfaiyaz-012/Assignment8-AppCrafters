import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import { Component } from "react";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

import AppDetails from "../Pages/AppDetails";
import Error404 from "../Pages/Error404";
import NoAppFound from "../Pages/NoAppFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
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
        path: "/appdetails/:id",
        children: [
          {
            index: true,
            Component: AppDetails,
          },
          {
            path: "*",
            Component: NoAppFound,
          },
        ],
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);
export default router;
