import { ReactElement } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthPage from "../../pages/auth/auth/AuthPage";
import Dashboard from "../../pages/dashboard/Dashboard";
import Dashboard2 from "../../pages/dashboard/Dashboard2";
import useIsUserLoggedIn from "../routing/hooks";
import PrivateRoute from "../routing/PrivateRoute";

const BasePage = (): ReactElement => {
  const isLogged = useIsUserLoggedIn();
  return (
    <>
      <PrivateRoute
        path="/dashboard"
        exact
        component={Dashboard}
        isLogged={isLogged}
      />
      <PrivateRoute
        path="/dashboard2"
        exact
        component={Dashboard2}
        isLogged={isLogged}
      />
    </>
  );
};

export default BasePage;
