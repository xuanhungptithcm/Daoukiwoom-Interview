import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useIsUserLoggedIn from "../../../components/routing/hooks";

const LoginPage = () => {
  const history = useHistory();
  const isLogged = useIsUserLoggedIn();

  useEffect(() => {
    if (isLogged) history.push("/dashboard");
  }, [isLogged]);

  return <>LoginPage Page</>;
};

export default LoginPage;
