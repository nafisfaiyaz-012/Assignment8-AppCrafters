import React from "react";
import notFoundImg from "../assets/App-Error.png";
import { useNavigate } from "react-router";
import { Link } from "lucide-react";
const NoAppFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gray-100 min-h-[calc(100vh-246px)]">
        <div className="w-fit mx-auto">
          <img className="mb-20 pt-10" src={notFoundImg} alt="" />
          <h1 className="text-center font-semibold text-4xl mb-5">
            Oops, App not found!
          </h1>
          <p className="text-center mb-5 text-md text-gray-400">
            The App you are requesting is not found on our system. please try
            another apps
          </p>

          <div className="w-fit mx-auto pb-5">
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

export default NoAppFound;
