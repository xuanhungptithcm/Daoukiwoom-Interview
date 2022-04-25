import { PropsWithChildren, ReactElement } from "react";

import { GeneralDataContext, initialGeneralData } from "./constants";
import ContextProvider from "./ContextProvider";
import { IGenericProps } from "./types";

const GeneralContext = ({
  children,
}: PropsWithChildren<IGenericProps>): ReactElement => {
  return (
    <ContextProvider
      initialState={initialGeneralData}
      Context={GeneralDataContext}
    >
      {children}
    </ContextProvider>
  );
};

export default GeneralContext;
