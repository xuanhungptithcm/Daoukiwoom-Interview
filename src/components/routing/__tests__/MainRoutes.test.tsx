/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import { useIsUserLogIn } from "../../context/hooks";
import { AUTH_PATH } from "../constants";
import MainRoutes from "../MainRoutes";

describe("MainRoutes", () => {
  beforeEach(() => {
    jest.mock("uid", () => () => 1);
    jest.mock("../../../routes/routes", () => 1);
  });
  test("should properly render with authorized", () => {
    const routes = [
      {
        key: "1",
        path: AUTH_PATH.LOGIN_PAGE,
        component: "B",
        requiredAuthen: false,
        exact: true,
        isAuthorized: false,
      },
      {
        key: "2",
        path: "/",
        component: "B",
        requiredAuthen: false,
        exact: true,
        isAuthorized: false,
      },
    ];
    jest.mock("../../../routes/routes", () => routes);

    (useIsUserLogIn as any) = () => true;
    expect(shallow(<MainRoutes />)).toMatchSnapshot();
  });
  test("should properly render with no authorized", () => {
    const routes = [
      {
        key: "1",
        path: AUTH_PATH.LOGIN_PAGE,
        component: "B",
        requiredAuthen: false,
        exact: true,
        isAuthorized: false,
      },
      {
        key: "2",
        path: "/",
        component: "B",
        requiredAuthen: false,
        exact: true,
        isAuthorized: false,
      },
    ];
    jest.mock("../../../routes/routes", () => routes);

    jest.mock("../../context/hooks", () => ({
      useIsUserLogIn: () => false,
    }));
    (useIsUserLogIn as any) = () => false;
    expect(shallow(<MainRoutes />)).toMatchSnapshot();
  });
});
