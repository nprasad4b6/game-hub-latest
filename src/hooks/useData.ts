import React, { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  result: T[];
}

export const useData = <T>(endpoint: string, requestConfiguration?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClinet
      .get(endpoint, { signal: controller.signal, ...requestConfiguration})
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // just return empty without set any error
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  },deps? [...deps]: []);

  return { data, error, isLoading };
};

export default useData;
