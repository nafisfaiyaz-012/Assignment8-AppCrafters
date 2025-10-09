import React, { useState } from "react";
import { useParams } from "react-router";
import useAppdata from "../Hooks/useAppData";
import LoadingSpinner from "./LoadingSpinner";
import { CircleCheckBig, Download, Star, ThumbsUp } from "lucide-react";
import SingleDataBarChart from "../Components/SingleDataBarChart";
import { toast, ToastContainer } from "react-toastify";
import { setDataToLS } from "../Utilities/LocalStorageFunctionality";

const AppDetails = () => {
  const [disable, setDisable] = useState(false);
  const { data } = useAppdata();
  const { id } = useParams();
  const singleAppData = data.find((el) => el.id === Number(id));

  //loading spinner for empty array
  if (!singleAppData) {
    return (
      <div className="w-fit mx-auto mt-100 bg-gray-100">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
  } = singleAppData;
  //   console.log(singleAppData);

  const handleInstall = () => {
    setDisable(true);
    toast("Apps installed successfully!");
    setDataToLS(id)
  };
  return (
    <div className="bg-gray-100">
      <div className="p-10">
        <div className="flex gap-10 border-b border-gray-400 pb-10">
          <div>
            <img className="h-[250px]" src={image} alt="" />
          </div>
          <div>
            <div>
              <h1 className="font-semibold text-2xl">{title}</h1>
              <p className="border-b-1 border-gray-300 pb-5 font-semibold text-gray-400">
                Developed by:{" "}
                <span className="text-sm bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-semibold">
                  {companyName}
                </span>
              </p>
            </div>
            <div className="my-5 flex gap-15 ">
              <div className="space-y-1">
                <p className="text-[#00D390]">
                  <Download />
                </p>
                <p>Downloads</p>
                <p className="font-bold text-xl">{downloads}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[#FF8811]">
                  <Star />
                </p>
                <p>Average Ratings</p>
                <p className="font-bold text-xl">{ratingAvg}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[#00D390]">
                  <ThumbsUp />
                </p>
                <p>Total Reviews</p>
                <p className="font-bold text-xl">{reviews}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleInstall()}
                disabled={disable}
                className="btn bg-[#00d390] text-white px-3 py-1 rounded-xl"
              >
                {disable ? (
                  <div className="flex gap-2">
                    <p>Installed</p>
                    <p>
                      <CircleCheckBig />
                    </p>
                  </div>
                ) : (
                  <p>Install Now ({size})</p>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* chart & description */}
      <div className="px-10">
        <div className="border-b border-gray-400 pb-10">
          <SingleDataBarChart
            singleAppData={singleAppData}
          ></SingleDataBarChart>
        </div>

        <div className="py-10">
          <p>{description}</p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AppDetails;
