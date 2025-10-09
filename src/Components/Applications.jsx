import React from "react";
import useAppdata from "../Hooks/useAppData";
import Application from "./Application";
import { Link } from "react-router";
import SkeletonLoader from "./SkeletonLoader";

const Applications = () => {
  const { data, loading } = useAppdata();
  const limitedDataForHome = data.slice(0, 8);
  // console.log(data);

  return (
    <div className="w-11/12 mx-auto pb-10">
      <div className="text-center mt-5 space-y-4">
        <h1 className="text-5xl font-semibold">Trending Apps</h1>
        <p className="text-lg text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading ? (
        <SkeletonLoader count='8'></SkeletonLoader>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-10 my-5">
            {limitedDataForHome.map((data) => (
              <Application key={data.id} data={data}></Application>
            ))}
          </div>
          <div className="w-fit mx-auto mt-10 bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white px-16 py-2 rounded-xl text-xl">
            <Link to="/apps">Show All</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Applications;
