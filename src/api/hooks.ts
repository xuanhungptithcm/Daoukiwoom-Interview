import { useCallback, useEffect, useState } from "react";
import { useGeneralContext } from "../components/context/hooks";
import { IUserInfo, IUserLoginProps } from "../components/context/types";
import { useAxiosGet } from "../hooks/useAxiosGet";

const AUTH_URL: string = process.env.REACT_APP_AUTH_URL || "";

export const useLogin = () => {
  const { setGeneralContext } = useGeneralContext();
  const [key, setKey] = useState<number>(0);
  const { response, getError } = useAxiosGet<IUserInfo>(AUTH_URL, key);

  useEffect(() => {
    if (!response || getError || key === 0) return;
    setGeneralContext((prev: any) => ({
      ...prev,
      response,
      isLoggedIn: true,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, getError, key]);

  // only for interview
  // change key to
  return useCallback((formData: IUserLoginProps) => {
    setKey((prev) => prev + 1);
  }, []);
};
