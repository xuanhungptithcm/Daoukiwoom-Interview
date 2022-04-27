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
    const loginForm = screen.getByLabelText<any>("login-form");

    return {
      ...utils,
      emailInput,
      emailPassword,
      loginForm,
    };
  };

  test("should render correct", () => {
    const login = jest.fn();
    const handleSubmit = jest.fn();
    (useLogin as any) = () => login;

    const { emailInput, emailPassword, loginForm } = setup();
    fireEvent.change(emailInput, { target: { value: "xuanhung@gmail.com" } });
    expect(emailInput.value).toBe("xuanhung@gmail.com");
    fireEvent.change(emailPassword, { target: { value: "Abc1234456_" } });
    expect(emailPassword.value).toBe("Abc1234456_");

    loginForm.onsubmit = handleSubmit;
    fireEvent.submit(loginForm);
    expect(handleSubmit).toBeCalledTimes(1);
  });
});
