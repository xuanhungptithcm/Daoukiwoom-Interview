import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export type Nullable<T> = T | null;

export const useAxiosGet = <T>(
  url: string,
  key: number = 0,
  config?: AxiosRequestConfig
) => {
  const [response, setResponse] = useState<Nullable<T>>(null);
  const [getError, setGetError] = useState<Nullable<AxiosError>>(null);

  useEffect(() => {
    if (!url || key === 0) {
      setResponse(null);
      setGetError(null);

      return;
    }
    const getData = async () => {
      try {
        const { data } = await axios.get<T>(url, config);
        setResponse(data);
      } catch (error: any) {
        setResponse(null);
        setGetError(error);
      }
    };

    getData();
  }, [url, key, config]);

  return {
    response,
    getError,
  };
};
