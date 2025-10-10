import React from "react";
import { Link, useNavigate } from "react-router";

const NoSearchAppFound = () => {
  const navigate = useNavigate();

  const handleShowAll = () => {
    navigate("/apps");
    window.location.reload();
  };
  return (
    <div className="text-center text-6xl pb-50">
      <p className="mt-50 ">NO APPS FOUND</p>
      <button
        onClick={handleShowAll}
        className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white w-[150px]"
      >
        Show All Apps!
      </button>
    </div>
  );
};

export default NoSearchAppFound;
