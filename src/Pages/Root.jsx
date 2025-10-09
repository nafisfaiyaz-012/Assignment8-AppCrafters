import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "./LoadingSpinner";

const Root = () => {
    /* const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    console.log(isNavigating); */
    
  return (
    <div className="flex flex-col min-h-screen w-11/12 mx-auto">
      <Navbar></Navbar>
      {/* {
        isNavigating === 'true' && <LoadingSpinner></LoadingSpinner>
      } */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
