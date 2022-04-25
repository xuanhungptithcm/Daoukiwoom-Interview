/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jest/no-mocks-import */

import { useGeneralContext } from "../../components/context/hooks";
import { useAxiosGet } from "../../hooks/useAxiosGet";
import { useInitUserInfo, useLogin, useStoreUserInfo } from "../hooks";
import {
  mockUseCallback,
  mockUseContext,
  mockUseEffect,
  mockUseState,
} from "./../../__mocks__/GenericReactMocks";

jest.mock("../../components/context/constants");

describe("useStoreUserInfo", () => {
  const sessionStorageMock = (() => {
    let store: any = {};
    return {
      getItem(key: any) {
        return store[key] || null;
      },
      setItem(key: any, value: any) {
        store[key] = value.toString();
      },
      removeItem(key: any) {
        delete store[key];
      },
      clear() {
        store = {};
      },
    };
  })();
  Object.defineProperty(window, "sessionStorage", {
    value: sessionStorageMock,
  });
  test("should set user info in session storage", () => {
    mockUseCallback();
    const setStore = useStoreUserInfo();
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    setStore({ username: "123" } as any);
    expect(sessionStorageMock.setItem).toBeCalled();
    expect(sessionStorageMock.setItem).toBeCalledWith(
      "user",
      JSON.stringify({ username: "123" })
    );
  });
  test("should not set value", () => {
    jest.resetAllMocks();
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    mockUseCallback();
    jest.mock("../hooks");
    const setStore = useStoreUserInfo();
    setStore("" as any);
    expect(sessionStorageMock.setItem).toBeCalledTimes(0);
  });
});

describe("useInitUserInfo", () => {
  const sessionStorageMock = (() => {
    let store: any = {};
    return {
      getItem(key: any) {
        return store[key] || null;
      },
      setItem(key: any, value: any) {
        store[key] = value.toString();
      },
      removeItem(key: any) {
        delete store[key];
      },
      clear() {
        store = {};
      },
    };
  })();
  Object.defineProperty(window, "sessionStorage", {
    value: sessionStorageMock,
  });
  beforeEach(() => {
    mockUseEffect();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("should init user info", () => {
    window.sessionStorage.setItem("user", JSON.stringify({ username: "123" }));
    const getItem = jest.spyOn(window.sessionStorage, "getItem");
    let setter: any = jest.fn();
    (useGeneralContext as any) = () => ({
      setGeneralContext: jest.fn((fn) => (setter = fn)),
    });
    useInitUserInfo();
    expect(sessionStorage.getItem).toBeCalled();
    expect(
      setter({
        other: 123,
      })
    ).toMatchObject({
      isLoggedIn: true,
      other: 123,
      userInfo: {
        username: "123",
      },
    });
  });
  test("should not init user info", () => {
    window.sessionStorage.setItem("user", "");
    const getItem = jest.spyOn(window.sessionStorage, "getItem");
    let setter: any = jest.fn();
    (useGeneralContext as any) = () => ({
      setGeneralContext: setter,
    });
    useInitUserInfo();
    expect(sessionStorage.getItem).toBeCalled();
    expect(setter).toBeCalledTimes(0);
  });
});
describe("useLogin", () => {
  let contextSetter: any;
  const setUserInfo: any = jest.fn();
  const setKey = jest.fn();
  const userLogin = {
    email: "abc@gmail.com",
    password: "123456",
  };

  beforeEach(() => {
    contextSetter = jest.fn();
    mockUseCallback();
    mockUseContext();
    mockUseEffect();
    (useGeneralContext as any) = () => ({
      setGeneralContext: jest.fn((fn) => (contextSetter = fn)),
    });
    (useStoreUserInfo as any) = () => setUserInfo;
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("successful call", async () => {
    mockUseState(1, setKey);

    (useAxiosGet as any) = jest.fn().mockImplementationOnce(() => ({
      response: {
        createdAt: "2021-10-21T08:36:53.248Z",
        name: "Jimmie Thompson",
        avatar: "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
        username: "Mona_Kassulke14",
        password: "EECsjlVnWIXfeuA",
        id: "1",
      },
      getError: null,
    }));
    expect(setKey).toBeCalledTimes(0);
    const login = useLogin();
    expect(setKey).toBeCalledTimes(0);
    login(userLogin);
    expect(setKey).toBeCalledTimes(1);
    expect(contextSetter()).toMatchObject({
      isLoggedIn: true,
      userInfo: {
        avatar: "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
        createdAt: "2021-10-21T08:36:53.248Z",
        id: "1",
        name: "Jimmie Thompson",
        password: "EECsjlVnWIXfeuA",
        username: "Mona_Kassulke14",
      },
    });
    expect(setUserInfo).toBeCalled();
    expect(setUserInfo).toBeCalledWith({
      avatar: "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
      createdAt: "2021-10-21T08:36:53.248Z",
      id: "1",
      name: "Jimmie Thompson",
      password: "EECsjlVnWIXfeuA",
      username: "Mona_Kassulke14",
    });
  });

  test("failed call", async () => {
    mockUseState(0, setKey);
    (useAxiosGet as any) = jest.fn().mockImplementationOnce(() => ({
      response: null,
      getError: null,
    }));
    const login = useLogin();
    login(userLogin);
    expect(contextSetter).not.toBeCalled();
  });
});
