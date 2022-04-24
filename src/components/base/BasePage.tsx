import { ReactElement } from "react";
import Dashboard from "../../pages/dashboard/Dashboard";
import { useIsUserLogIn } from "../context/hooks";
import PrivateRoute from "../routing/PrivateRoute";

const BasePage = (): ReactElement => {
  const isLogged = useIsUserLogIn();
  return (
    <>
      <PrivateRoute
        path="/dashboard"
        exact
        component={Dashboard}
        isLogged={isLogged}
      />
    </>
  );
};

export default BasePage;
