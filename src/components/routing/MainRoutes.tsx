import { ReactElement } from "react";
import { Switch } from "react-router-dom";
import routes from "../../routes/routes";
import { useIsUserLogIn } from "../context/hooks";
import RouteWithSubRoutes from "../route-with-sub-routes/RouteWithSubRoutes";

const MainRoutes = (): ReactElement => {
  const isAuthorized = useIsUserLogIn();
  return (
    <Switch>
      {routes.map(({ key, ...rest }) => (
        <RouteWithSubRoutes key={key} {...rest} isAuthorized={isAuthorized} />
      ))}
    </Switch>
  );
};

export default MainRoutes;
