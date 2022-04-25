/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import SignUpPage from "../SignUpPage";

describe("SignUpPage", () => {
  test("should render correct", () => {
    expect(shallow(<SignUpPage />)).toMatchSnapshot();
  });

});
