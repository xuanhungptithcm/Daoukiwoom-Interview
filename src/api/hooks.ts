import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useGeneralContext } from "../components/context/hooks";
import { IUserInfo } from "../components/context/types";
import { useAxiosGet } from "../hooks/useAxiosGet";

const AUTH_URL: string = process.env.REACT_APP_AUTH_URL || "";

export const useLogin = () => {
  const { setGeneralContext } = useGeneralContext();
  const [key, setKey] = useState(0);
  const { response, getError } = useAxiosGet<IUserInfo>(AUTH_URL, key);
  const history = useHistory();

  useEffect(() => {
    if (!response || getError || !key) return;

    setGeneralContext((prev) => ({
      ...prev,
      response,
      isLoggedIn: true,
    }));
    history.push("./dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, getError, key]);

  // only for interview
  // change key to
  return useCallback((formData: any) => {
    setKey((prev) => prev + 1);
  }, []);
};
