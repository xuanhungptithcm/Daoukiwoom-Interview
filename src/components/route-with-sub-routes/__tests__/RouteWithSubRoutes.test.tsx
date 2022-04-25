/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import RouteWithSubRoutes from "../RouteWithSubRoutes";

describe("RouteWithSubRoutes", () => {
  test("should properly render", () => {
    const routes: any = [
      {
        component: "A",
        path: "/a",
        key: "1",
        requiredAuthen: false,
        exact: false,
        isAuthorized: false,
      },
      {
        component: "B",
        route: "/b",
        key: "2",
        requiredAuthen: false,
        exact: false,
        isAuthorized: false,
      },
    ];
    expect(shallow(<RouteWithSubRoutes {...routes} />)).toMatchSnapshot();
  });
});
