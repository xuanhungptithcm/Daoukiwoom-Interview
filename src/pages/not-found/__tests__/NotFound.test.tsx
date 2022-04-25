/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import NotFound from "../NotFound";

describe("NotFound", () => {
  test("should render correct", () => {
    expect(shallow(<NotFound />)).toMatchSnapshot();
  });

});
