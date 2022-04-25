/* eslint-disable jest/no-mocks-import */

import axios from "axios";
import { mockUseEffect, mockUseMemo, mockUseState } from "../../__mocks__/GenericReactMocks";
import { useAxiosGet } from "../useAxiosGet";

jest.mock("axios");
const stateSetter = jest.fn();
jest.mock("../../components/context/constants");

describe("useAxiosGet", () => {
  beforeAll(() => {
    mockUseState(undefined, stateSetter);
    mockUseEffect();
    mockUseMemo();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("get data success", async () => {
    const data = "success data";
    (axios.get as any).mockImplementationOnce(() => Promise.resolve({ data }));
    stateSetter.mockReset();
    expect(stateSetter).not.toBeCalled();
    await useAxiosGet("url", 1);
    expect(stateSetter).toBeCalledTimes(1);
    expect(stateSetter).toBeCalledWith("success data");
  });

  test("get data failure", async () => {
    const error = new Error("some error");
    (axios.get as any).mockImplementationOnce(() => Promise.reject(error));
    stateSetter.mockReset();
    expect(stateSetter).not.toBeCalled();
    await useAxiosGet("url", 0, {});
    expect(stateSetter).toBeCalledTimes(2);
    expect(stateSetter.mock.calls).toMatchObject([[null], [null]]);
  });

  test("should not trigger request if URL is blank", async () => {
    const trigger = jest.fn();
    (axios.get as any).mockImplementationOnce(() => trigger());
    stateSetter.mockReset();
    expect(stateSetter).not.toBeCalled();
    await useAxiosGet("", 0, {});
    expect(stateSetter).toBeCalledTimes(2);
    expect(stateSetter.mock.calls).toMatchObject([[null], [null]]);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
