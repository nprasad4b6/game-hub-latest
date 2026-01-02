import React, { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";
import { CanceledError } from "axios";



export interface Gener {
  id: number;
  name: string;
}

interface FetchGenersResponse {
  count: number;
  result: Gener[];
}

export const useGeners = () => {
  const [geners, setGeners] = useState<Gener[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClinet
      .get("/genres", { signal: controller.signal })
      .then((res) => {
        setGeners(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // just return empty without set any error
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { geners, error, isLoading };
};

export default useGeners;
