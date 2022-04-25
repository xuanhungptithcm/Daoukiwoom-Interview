import { ComponentType, createElement } from "react";
import { Redirect, Route } from "react-router-dom";
import { AUTH_PATH } from "./constants";

interface IContentRouteProps {
  path?: string;
  exact?: boolean;
  isLogged?: boolean;
  component?: ComponentType;
}
const PrivateRoute = ({
  component,
  exact,
  isLogged,
  ...props
}: IContentRouteProps) => {
  return (
    <Route exact={exact} {...props}>
      {(routeProps) => {
        if (!routeProps.match) return null;
        if (!isLogged) return <Redirect to={AUTH_PATH.LOGIN_PAGE} />;
        if (component) {
          return <>{createElement(component)}</>;
        }
        return null;
      }}
    </Route>
  );
};

export default PrivateRoute;
