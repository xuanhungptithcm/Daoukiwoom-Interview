import { PropsWithChildren, ReactElement, useState } from "react";
import { IReactContext } from "./types";

interface IContextProviderProps<T> {
  Context: IReactContext<T>;
  initialState: T;
}

function ContextProvider<T>({
  Context,
  initialState,
  children,
}: PropsWithChildren<IContextProviderProps<T>>): ReactElement {
  const state = useState<T>(initialState);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default ContextProvider;
