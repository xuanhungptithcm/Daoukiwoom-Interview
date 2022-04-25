import { ReactElement } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../../pages/auth/login/LoginPage";
import ErrorPage from "../../pages/error/ErrorPage";
import BasePage from "../base/BasePage";
import { useIsUserLogIn } from "../context/hooks";
import { AUTH_PATH } from "./constants";

const Routes = (): ReactElement => {
  const isLogged = useIsUserLogIn();
  console.log("🚀 ~ file: MainRoutes.tsx ~ line 11 ~ Routes ~ isLogged", isLogged)
  
  return (
    <BrowserRouter basename="">
      <Switch>
        <Route path={AUTH_PATH.NOT_FOUND} component={ErrorPage} />
        <Route path={AUTH_PATH.LOGIN_PAGE} component={LoginPage} />
        {!isLogged && (
          <Route>
            <Redirect to={AUTH_PATH.LOGIN_PAGE} />
          </Route>
        )}
        <BasePage isLogged={isLogged} />
        <Redirect from="*" to={AUTH_PATH.NOT_FOUND} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
