import axios from "axios";
import { useEffect, useState } from "react";

const useAppdata = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("../appsData.json")
      .then((data) => setData(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return {data,error,loading}
};
export default useAppdata;
