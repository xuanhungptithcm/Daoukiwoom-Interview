import { shallow } from "enzyme";
import MenuHeader from "../MenuHeader";

describe("MenuHeader", () => {
  test("should properly render", () => {
    expect(shallow(<MenuHeader />)).toMatchSnapshot();
  });
});
