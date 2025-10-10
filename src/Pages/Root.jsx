import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "./LoadingSpinner";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = navigation.state;
  // console.log(isNavigating);

  return (
    <div className="flex flex-col min-h-screen w-11/12 mx-auto">
      <Navbar></Navbar>
      {isNavigating === "loading" && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
            <LoadingSpinner />
          </div>
        </>
      )}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
