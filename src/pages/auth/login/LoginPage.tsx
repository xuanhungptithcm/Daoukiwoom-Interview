import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useIsUserLogIn } from "../../../components/context/hooks";

const LoginPage = () => {
  const history = useHistory();
  const isLogged = useIsUserLogIn();
  console.log(123123);
  
  useEffect(() => {
    if (isLogged) history.push("/dashboard");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return <>LoginPage Page</>;
};

export default LoginPage;
