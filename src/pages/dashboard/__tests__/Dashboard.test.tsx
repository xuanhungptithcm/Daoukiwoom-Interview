/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import Dashboard from "../Dashboard";

describe("Dashboard", () => {
  test("should render correct", () => {
    expect(shallow(<Dashboard />)).toMatchSnapshot();
  });

});
