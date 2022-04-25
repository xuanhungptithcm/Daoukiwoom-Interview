/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import PrivateRoute from "../PrivateRoute";

describe("PrivateRoute", () => {
  test("should properly render with authorized", () => {
    const data: any = {
      component: "A",
      exact: true,
      isAuthorized: true,
      path: "/a",
    };
    expect(shallow(<PrivateRoute {...data} />)).toMatchSnapshot();
  });
});
