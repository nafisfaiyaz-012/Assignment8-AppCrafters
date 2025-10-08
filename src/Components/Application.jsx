import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Application = ({ data }) => {
  const { title, downloads, ratingAvg, image, id } = data;

  //   console.log(data);

  return (
    <Link to={`/appdetails/${id}`}>
      <div className="p-5 shadow-2xl rounded-xl space-y-4  transform transition duration-300 ease-in-out hover:scale-103">
        <div className="rounded-2xl overflow-hidden">
          <img className="h-[350px] w-full object-cover" src={image} alt="" />
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-semibold">{title}</p>
          <div className="flex justify-between items-center font-semibold">
            <div className="flex gap-3 justify-between items-center text-[#00D390] px-3 py-1 rounded-lg bg-[#F1F5E8]">
              <Download />
              <p>{downloads}</p>
            </div>
            <div className="flex gap-3 justify-between items-center text-[#FF8811] px-3 py-1 rounded-lg bg-[#FFF0E1]">
              <Star />
              <p>{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Application;
