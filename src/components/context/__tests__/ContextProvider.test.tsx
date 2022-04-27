/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import { GeneralDataContext } from "../constants";
import ContextProvider from "../ContextProvider";

describe("ContextProvider", () => {
  test("should properly render", () => {
    expect(
      shallow(
        <ContextProvider Context={GeneralDataContext} initialState={{} as any}>
          children
        </ContextProvider>
      )
    ).toMatchSnapshot();
  });
});
