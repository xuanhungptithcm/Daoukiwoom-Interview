/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import ErrorBoundary from "../ErrorBoundary";

describe("ErrorBoundary", () => {
  test("should properly render", () => {
    expect(shallow(<ErrorBoundary> abc</ErrorBoundary>)).toMatchSnapshot();
  });
});
