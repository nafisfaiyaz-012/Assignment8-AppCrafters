import { getDataFromLS } from "../Utilities/LocalStorageFunctionality";
import useAppdata from "../Hooks/useAppData";
import InstalledApps from "../Components/InstalledApps";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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

    // console.log(filteredData);
  }, [data]);

  const handleDelete = (id) => {
    const dataFromLS = getDataFromLS();
    const dataAfterDelete = dataFromLS.filter((num) => num !== Number(id));
    localStorage.setItem("apps", JSON.stringify(dataAfterDelete));
    // console.log(dataAfterDelete);
    const updatedFilter = filter.filter((data) => data.id !== id);
    setFilter([...updatedFilter]);
    toast('Apps Uninstalled.');
  };

  const handleSort = (str) => {
    if (str === "asc") {
      const asc = filter.sort(
        (a, b) => parseFloat(a.downloads) - parseFloat(b.downloads)
      );
      setFilter([...asc]);
    } else if (str === "desc") {
      const desc = filter.sort(
        (a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)
      );
      setFilter([...desc]);
    }
  };
  return (
    <div className="bg-gray-100 p-5 min-h-[calc(100vh-246px)]">
      <div className="text-center py-15 space-y-4">
        <p className="font-semibold text-3xl">Your Installed Apps</p>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">({filter.length}) App Found</p>
        {/* dropdown */}
        <select defaultValue="Sort By Size" className="select">
          <option>Sort by Downloads</option>
          <option onClick={() => handleSort("desc")}>High to Low</option>
          <option
            onClick={() => {
              handleSort("asc");
            }}
          >
            Low to High
          </option>
        </select>
      </div>

      <div className="">
        {filter.map((data) => (
          <InstalledApps
            handleDelete={handleDelete}
            key={data.id}
            data={data}
          ></InstalledApps>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Installation;
