import { createContext } from "react";
import { initialSetter } from "../constants";
import { makeContext } from "../helpers";

jest.mock("react");
(createContext as any) = jest.fn(([value, setter]) => [value, setter]);
(initialSetter as any) = "setterfn";

describe("makeContext", () => {
  test("should return", () => {
    expect(makeContext("initial value")).toMatchObject([
      "initial value",
      "setterfn",
    ]);
  });
});