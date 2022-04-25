import { PropsWithChildren, ReactElement } from "react";
import ApiHandler from "../../api/ApiHandler";

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
      <ApiHandler />
      {children}
    </ContextProvider>
  );
};

export default GeneralContext;
