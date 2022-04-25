/**
 *
 * RouteWithSubRoutes
 *
 */

import React from "react";
import { Route } from "react-router-dom";
import { IRouteProps } from "../../routes/type";
import PrivateRoute from "../routing/PrivateRoute";

function RouteWithSubRoutes(route: IRouteProps) {
  return route.requiredAuthen ? (
    <PrivateRoute {...route} />
  ) : (
    <Route
      exact={route.exact}
      path={route.path}
      render={(routeProps) => {
        if (!routeProps.match) return null;
        if (route.component) {
          return (
            // pass the sub-routes down to keep nesting
            <route.component {...routeProps} routes={route?.routes} />
          );
        }
        return null;
      }}
    />
  );
}

export default RouteWithSubRoutes;
