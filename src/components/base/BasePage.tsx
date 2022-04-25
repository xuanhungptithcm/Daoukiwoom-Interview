import { ReactElement } from "react";
import { Redirect } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import PrivateRoute from "../routing/PrivateRoute";

const BasePage = ({ isLogged }: any): ReactElement => {
  console.log(isLogged);
  return (
    <>
      <Redirect from="/" to="/dashboard" />
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
