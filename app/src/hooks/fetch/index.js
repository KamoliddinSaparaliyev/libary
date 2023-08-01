import instance from "../api";
import { useEffect } from "react";
import { useState } from "react";

const useFetchData = (EVDPOINT) => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoader(true);
    instance
      .get(EVDPOINT)
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })

      .catch((err) => console.error(err));
  }, [EVDPOINT]);
  return [data, loader];
};

export default useFetchData;
