import { Download, Star } from "lucide-react";
import React from "react";
import { getDataFromLS } from "../Utilities/LocalStorageFunctionality";


const InstalledApps = ({ data }) => {
  const { image, title, downloads, ratingAvg, size, id } = data;

  const handleDelete = (id) => {
    const dataFromLS = getDataFromLS();
    const dataAfterDelete = dataFromLS.filter((num) => num !== Number(id));
    localStorage.setItem("apps", JSON.stringify(dataAfterDelete));
    // console.log(dataAfterDelete);
  };
  
  return (
    <div className="flex justify-between items-center bg-white my-5 rounded-2xl">
      <div className="flex gap-5 p-5">
        <div>
          <img
            className="h-[70px] w-[70px] object-cover rounded-2xl"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold">{title}</p>
          <div className="flex gap-5">
            <div className="flex gap-1 text-[#00D390]">
              <p className="">
                <Download />
              </p>
              <p>{downloads}</p>
            </div>
            <div className="flex gap-1 text-[#FF8811]">
              <Star />
              <p>{ratingAvg}</p>
            </div>
            <p>{size}</p>
          </div>
        </div>
      </div>
      <div onClick={() => handleDelete(id)} className="mr-15">
        <button className="btn bg-[#00d390] text-white px-3 py-1 rounded-xl">
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
};

export default InstalledApps;
