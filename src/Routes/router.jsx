import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import { Component } from "react";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children:[
            {
                index:'/',
                Component: Home
            }
        ]
    }
])
export default router;