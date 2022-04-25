import { createContext } from "react";

import { initialSetter } from "./constants";
import { IContextState } from "./types";

export const makeContext = <T>(initial: T) => {
  return createContext<IContextState<T>>([initial, initialSetter]);
};