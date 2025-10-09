import { getDataFromLS } from "../Utilities/LocalStorageFunctionality";
import useAppdata from "../Hooks/useAppData";
import InstalledApps from "../Components/InstalledApps";
import { useEffect, useState } from "react";
/* 
   const [LS, setLS] = useState([]);
  const [filter, setFilter] = useState([]);
  const { data } = useAppdata();

  useEffect(() => {
    const dataFromLS = getDataFromLS();
    setLS([...dataFromLS]);
    const filteredData = data.filter((data) => LS.includes(data.id));
    setFilter(filteredData);
    console.log(filteredData);
  }, [data]);

*/
const Installation = () => {
  // console.log(filteredData);
  const [filter, setFilter] = useState([]);
  const { data } = useAppdata();

  useEffect(() => {
    const dataFromLS = getDataFromLS();

    const filteredData = data.filter((data) => dataFromLS.includes(data.id));
    setFilter([...filteredData]);

    console.log(filteredData);
  }, [data]);
  return (
    <div className="bg-gray-100 p-5">
      <div className="text-center py-15 space-y-4">
        <p className="font-semibold text-3xl">Your Installed Apps</p>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">1 Apps Found</p>
        <p>sort</p>
      </div>

      <div className="">
        {filter.map((data) => (
          <InstalledApps  key={data.id} data={data}></InstalledApps>
        ))}
      </div>
    </div>
  );
};

export default Installation;
