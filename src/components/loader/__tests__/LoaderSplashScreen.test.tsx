/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import LoaderSplashScreen from "../LoaderSplashScreen";

describe("LoaderSplashScreen", () => {
  test("should properly render", () => {
    expect(shallow(<LoaderSplashScreen />)).toMatchSnapshot();
  });
});
