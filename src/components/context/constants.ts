import React from "react";
import { makeContext } from "./helpers";

import { IGeneralData } from "./types";

export const initialSetter: React.Dispatch<React.SetStateAction<unknown>> =
  // this is just a placeholder function, it will never be used
  () => {
    // EMPTY
  };

export const initialGeneralData: IGeneralData = {
  isLoggedIn: true,
  userInfo: {
    createdAt: "",
    name: "",
    avatar: "",
    username: "",
    password: "",
    id: "",
  },
};

export const GeneralDataContext = makeContext(initialGeneralData);
