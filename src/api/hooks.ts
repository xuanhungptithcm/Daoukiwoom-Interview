/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { useGeneralContext } from "../components/context/hooks";
import { IUserInfo, IUserLoginProps } from "../components/context/types";
import { useAxiosGet } from "../hooks/useAxiosGet";

const AUTH_URL: string = process.env.REACT_APP_AUTH_URL || "";

export const useLogin = () => {
  const { setGeneralContext } = useGeneralContext();
  const [key, setKey] = useState<number>(0);
  const { response, getError } = useAxiosGet<IUserInfo>(AUTH_URL, key);
  const setUserInfo = useStoreUserInfo();
  useEffect(() => {
    if (!response || getError || key === 0) return;
    setGeneralContext((prev: any) => ({
      ...prev,
      userInfo: {
        ...response,
      },
      isLoggedIn: true,
    }));
    setUserInfo(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, getError, key]);

  // only for interview
  // change key to
  return useCallback((formData: IUserLoginProps) => {
    setKey((prev) => prev + 1);
  }, []);
};

export const useStoreUserInfo = () => {
  return useCallback((user: IUserInfo) => {
    if (!user) return;
    const userStr = JSON.stringify(user);
    window.sessionStorage.setItem("user", userStr);
  }, []);
};

export const useInitUserInfo = () => {
  const { setGeneralContext } = useGeneralContext();
  useEffect(() => {
    const userStr = window.sessionStorage.getItem("user");
    if (!userStr) return;
    try {
      const user = JSON.parse(userStr);
      setGeneralContext((prev) => ({
        ...prev,
        userInfo: {
          ...user,
        },
        isLoggedIn: true,
      }));
    } catch (error) {}
  }, []);
};