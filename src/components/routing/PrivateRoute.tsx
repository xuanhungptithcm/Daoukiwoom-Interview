import { ComponentType, createElement } from "react";
import { Redirect, Route } from "react-router-dom";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import { AUTH_PATH } from "./constants";

interface IContentRouteProps {
  path?: string;
  exact?: boolean;
  isAuthorized?: boolean;
  component: ComponentType;
}
const PrivateRoute = ({
  component,
  exact,
  isAuthorized,
  path,
}: IContentRouteProps) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) =>
        isAuthorized ? (
          <ErrorBoundary>{createElement(component)}</ErrorBoundary>
        ) : (
          <Redirect
            to={{
              pathname: AUTH_PATH.LOGIN_PAGE,
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
