/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useIsUserLogIn } from "../../../components/context/hooks";
import { AUTH_PATH, PRIVATE_PATH } from "../../../components/routing/constants";
import "../auth.scss";
import { IMessage, useSubmitForm, useValidateInputForm } from "./hooks";

const LoginPage = () => {
  const history = useHistory();
  const [error, setError] = useState<IMessage>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const isLogged = useIsUserLogIn();

  const validateForm = useValidateInputForm(setError);
  const submitForm = useSubmitForm(error, isLoading, setIsLoading, setError);

  useEffect(() => {
    if (isLogged) history.push(PRIVATE_PATH.DASHBOARD);
  }, [isLogged]);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submitForm(e);
  };

  const handleFormOnChange = (e: React.SyntheticEvent) => {
    e.preventDefault();
    validateForm(e);
  };

  return (
    <>
      <div className="login-form">
        <div className="left-form">
          <h1 className="welcome">Welcome back!</h1>
        </div>
        <div className="right-form">
          <div className="formCenter">
            <form
              className="formFields"
              aria-label="login-form"
              onSubmit={handleLogin}
              onChange={handleFormOnChange}
            >
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
                  aria-label="email-input"
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
                  aria-label="password-input"
                />
                <p className="error-message">{error.password}</p>
              </div>
              <div className="buttons">
                <button
                  className="btn-login"
                  aria-label="btn-login"
                  type="submit"
                  disabled={isLoading}
                >
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
