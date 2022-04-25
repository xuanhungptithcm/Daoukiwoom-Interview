/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import TopRightHeader from "../TopRightHeader";

describe("TopRightHeader", () => {
  test("should properly render", () => {
    expect(shallow(<TopRightHeader />)).toMatchSnapshot();
  });
});
