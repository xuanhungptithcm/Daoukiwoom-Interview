import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLogin } from "../../../api/hooks";
import { useIsUserLogIn } from "../../../components/context/hooks";
import { IUserLoginProps } from "../../../components/context/types";
import { AUTH_PATH, PRIVATE_PATH } from "../../../components/routing/constants";
import validateEmail from "../../../helpers/validateEmail";
import validatePassword from "../../../helpers/validatePassword";
import '../auth.scss';

const LoginPage = () => {
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const isLogged = useIsUserLogIn();
  const login = useLogin();
  useEffect(() => {
    if (isLogged) history.push(PRIVATE_PATH.DASHBOARD);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!

    if (!validateForm({ email, password })) return;
    if (!isLoading) {
      login({
        email,
        password,
      });
      setIsLoading((prev) => !prev);
    }
  };

  const validateForm = ({ email, password }: IUserLoginProps) => {
    let isValid = true;
    if (!validateEmail(email)) {
      setError((prev) => ({
        ...prev,
        email: "Email not valid",
      }));
      isValid = false;
    } else {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }
    if (!validatePassword(password)) {
      setError((prev) => ({
        ...prev,
        password:
          "Password must minimum of eight characters, at least one letter, one number",
      }));
      isValid = false;
    } else {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
    }

    return isValid;
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
                  autoComplete="off"
                />
                <p className="error-message">{error.email}</p>
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
                  autoComplete="off"
                />
                <p className="error-message">{error.password}</p>
              </div>
              <div className="buttons">
                <button className="btn-login" type="submit">
                  Login
                </button>
              </div>
              <p className="register-link">
                Don't have an account?{" "}
                <Link to={AUTH_PATH.SIGNUP_PAGE}>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
