import React from "react";
import Img404 from "../assets/error-404.png";
import { Link, useNavigate } from "react-router";
const Error404 = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-246px)]">
      <div className="w-fit mx-auto">
        <img className="mb-20 pt-10" src={Img404} alt="" />
        <h1 className="text-center font-semibold text-4xl mb-5">
          Oops, page not found!
        </h1>
        <p className="text-center mb-5 text-md text-gray-400">
          The page you are looking for is not available.
        </p>

        <div className="flex">
          <div className="w-fit mx-auto">
            <Link
              to='/'
              className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white w-[150px]"
            >
              Home
            </Link>
          </div>
          <div className="w-fit mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white w-[150px]"
            >
              Go Back!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
