import React, { useState } from "react";
import useAppdata from "../Hooks/useAppData";
import Application from "../Components/Application";
import NoSearchAppFound from "../Components/NoSearchAppFound";
import SkeletonLoader from "../Components/SkeletonLoader";

const Apps = () => {
  const [search, setSearch] = useState("");
  const { data, loading } = useAppdata();
  //   console.log(data);

  const searchTerm = search.replace(/\s+/g, "").toLocaleLowerCase();

  const searchedProducts = search
    ? data.filter((data) =>
        data.title?.replace(/\s+/g, "").toLocaleLowerCase().includes(searchTerm)
      )
    : data;
  //   console.log(searchedProducts);

  return (
    <div className="pt-10 bg-gray-100">
      <div className="text-center space-y-3">
        <p className="text-4xl font-semibold">Our All Applications</p>
        <p className="text-lg text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {/* search */}
      <div className="flex justify-between items-center mt-10">
        <p className="text-xl font-semibold">
          ({searchedProducts.length}) Apps Found
        </p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            defaultValue={search}
            type="search"
            placeholder="Search app"
          />
        </label>
      </div>

      {loading ? (
        <SkeletonLoader count='20'></SkeletonLoader>
      ) : (
        <>
          <div>
            {searchedProducts.length === 0 ? (
              <NoSearchAppFound></NoSearchAppFound>
            ) : (
              <div className="mt-5">
                <div className="grid grid-cols-4 gap-10 mt-5 pb-10">
                  {searchedProducts.map((data) => (
                    <Application key={data.id} data={data}></Application>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Apps;
