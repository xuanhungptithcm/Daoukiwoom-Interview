/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jest/no-mocks-import */
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useGeneralContext } from "../../components/context/hooks";
import { useAxiosGet } from "../../hooks/useAxiosGet";
import { useLogin } from '../hooks';
import { mockUseCallback, mockUseContext, mockUseEffect, mockUseState } from './../../__mocks__/GenericReactMocks';

jest.mock("../../components/context/constants");


describe("useLogin", () => {
  let contextSetter: any;
  const setKey = jest.fn();
  const userLogin = {
    email: 'abc@gmail.com',
    password: '123456'
  };

  beforeEach(() => {
    contextSetter = jest.fn();
    mockUseCallback();
    mockUseContext();
    mockUseEffect();
    (useGeneralContext as any) = () => ({
      setGeneralContext: jest.fn((fn) => contextSetter = fn)
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("successful call", async () => {
    mockUseState(1, setKey);

    (useAxiosGet as any) = jest.fn().mockImplementationOnce(() => ({
      response: {
        "createdAt": "2021-10-21T08:36:53.248Z",
        "name": "Jimmie Thompson",
        "avatar": "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
        "username": "Mona_Kassulke14",
        "password": "EECsjlVnWIXfeuA",
        "id": "1"
      },
      getError: null,
    }));
    expect(setKey).toBeCalledTimes(0);
    const login = useLogin();
    expect(setKey).toBeCalledTimes(0);
    login(userLogin);
    expect(setKey).toBeCalledTimes(1);
    expect(contextSetter()).toMatchObject({
      "isLoggedIn": true,
      "response": {
        "avatar": "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
        "createdAt": "2021-10-21T08:36:53.248Z",
        "id": "1",
        "name": "Jimmie Thompson",
        "password": "EECsjlVnWIXfeuA",
        "username": "Mona_Kassulke14",
      },
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
