import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLogin } from "../../../api/hooks";
import { useIsUserLogIn } from "../../../components/context/hooks";
import "./login.scss";

const LoginPage = () => {
  const history = useHistory();
  const isLogged = useIsUserLogIn();
  const login = useLogin();
  useEffect(() => {
    if (isLogged) history.push("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    login({});
    e.preventDefault();
  };

  return (
    <>
      <div className="login-form">
        <div className="left-form">
          <h1 className="welcome">Welcome back!</h1>
        </div>
        <div className="right-form">
          <div className="formCenter">
            <form className="formFields" onSubmit={handleLogin}>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>

              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>

              <div className="buttons">
                <button className="btn-login" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
