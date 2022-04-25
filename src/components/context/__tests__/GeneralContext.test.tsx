/**
 * @jest-environment jsdom
 */

 import { shallow } from "enzyme";
 import GeneralContext from "../GeneralContext";

 jest.mock("../../../components/context/constants");

 describe("GeneralContext", () => {
   test("should render properly", () => {
     expect(shallow(<GeneralContext />)).toMatchSnapshot();
   });
 });
