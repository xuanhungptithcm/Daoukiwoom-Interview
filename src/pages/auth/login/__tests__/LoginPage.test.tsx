/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLogin } from "../../../../api/hooks";
import LoginPage from "../LoginPage";

interface IInputType extends HTMLElement {
  value: string;
}
describe("LoginPage", () => {
  const setup = () => {
    const utils = render(
      <Router>
        <LoginPage />
      </Router>
    );
    const emailInput = screen.getByLabelText<IInputType>("email-input");
    const emailPassword = screen.getByLabelText<IInputType>("password-input");
    const loginForm = screen.getByLabelText<IInputType>("login-form");

    return {
      ...utils,
      emailInput,
      emailPassword,
      loginForm,
    };
  };

  test("should render correct", () => {
    const login = jest.fn();
    (useLogin as any) = () => login;

    const { emailInput, emailPassword, loginForm } = setup();
    console.log(emailInput);
    fireEvent.change(emailInput, { target: { value: "user01" } });
    expect(emailInput.value).toBe("user01");
    fireEvent.change(emailPassword, { target: { value: "123456789" } });
    expect(emailPassword.value).toBe("123456789");

    fireEvent.submit(loginForm, { target: {
      email: { value: "xuanhung@gmail.com" },
      password: { value: "Abc123123123_" },
    } });
    expect(login).toBeCalledTimes(0);
  });
});
