/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import LoginPage from "../LoginPage";

describe("LoginPage", () => {
  test("should render correct", () => {
    expect(shallow(<LoginPage />)).toMatchSnapshot();
  });

});
