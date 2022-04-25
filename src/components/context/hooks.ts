import { useContext, useMemo } from "react";
import { GeneralDataContext } from "./constants";

export const useGeneralContext = () => {
  const [{ isLoggedIn, userInfo }, setGeneralContext] =
    useContext(GeneralDataContext);

  return {
    isLoggedIn,
    userInfo,
    setGeneralContext,
  };
};

export const useIsUserLogIn = () => {
  const { isLoggedIn } = useGeneralContext();

  return useMemo(() => isLoggedIn, [isLoggedIn]);
};

export const useUserInfo = () => {
  const { userInfo } = useGeneralContext();
  return useMemo(() => userInfo, [userInfo]);
};
