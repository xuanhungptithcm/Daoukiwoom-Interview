import { ReactElement } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "../../pages/auth/auth/AuthPage";
import LoginPage from "../../pages/auth/login/LoginPage";
import ErrorPage from "../../pages/error/ErrorPage";
import BasePage from "../base/BasePage";
import { AUTH_PATH } from "./constants";
import useIsUserLoggedIn from "./hooks";

const Routes = (): ReactElement => {
  const isLogged = useIsUserLoggedIn();
  return (
    <BrowserRouter basename="">
      <Switch>
        <Route path="/404" component={ErrorPage} />
        <Route path={AUTH_PATH.LOGIN_PAGE} component={LoginPage} />
        {!isLogged && (
          <Route>
            <Redirect to={AUTH_PATH.LOGIN_PAGE} />
          </Route>
        )}
        <BasePage />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
