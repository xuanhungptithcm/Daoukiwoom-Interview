import { useEffect } from "react";
import { useGeneralContext } from "../components/context/hooks";
import { IUserInfo } from "../components/context/types";
import { useAxiosGet } from "../hooks/useAxiosGet";

const AUTH_URL: string = process.env.REACT_APP_AUTH_URL || "";

export const useLocalCategoryDetailApi = () => {
  const { setGeneralContext } = useGeneralContext();

  const { response, getError } = useAxiosGet<IUserInfo>(AUTH_URL);

  useEffect(() => {
    if (!response || getError) return;

    setGeneralContext((prev) => ({
      ...prev,
      response,
    }));
  }, [response, getError]);
};
