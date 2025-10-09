import React from "react";

const SkeletonLoader = ({count}) => {
  return (
    <div className="grid grid-cols-4 gap-10 my-5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="skeleton h-[350px] w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
