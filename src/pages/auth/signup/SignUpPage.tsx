import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useIsUserLogIn } from "../../../components/context/hooks";
import { AUTH_PATH } from "../../../components/routing/constants";
import '../auth.scss';

const SignUpPage = () => {
  const history = useHistory();
  const isLogged = useIsUserLogIn();

  useEffect(() => {
    if (isLogged) history.push("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  const handleSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login-form">
        <div className="left-form">
          <h1 className="welcome">Register to use our service !</h1>
        </div>
        <div className="right-form">
          <div className="formCenter">
            <form className="formFields" onSubmit={handleSignUp}>
              <div className="formField">
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="formFieldInput"
                    placeholder="Enter your first name"
                    name="first-name"
                    autoComplete="off"
                  />
                </div>
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="formFieldInput"
                    placeholder="Enter your last name"
                    name="last-name"
                    autoComplete="off"
                  />
                </div>
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
              </div>
              <div className="buttons">
                <button className="btn-login" type="submit">
                  Sign Up
                </button>
              </div>
              <p className="register-link">
                Have an account? <Link to={AUTH_PATH.LOGIN_PAGE}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
