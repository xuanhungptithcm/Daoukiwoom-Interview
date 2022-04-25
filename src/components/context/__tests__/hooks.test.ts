/* eslint-disable jest/no-mocks-import */
import { mockUseContext, mockUseMemo } from "../../../__mocks__/GenericReactMocks";
import { useGeneralContext, useIsUserLogIn, useUserInfo } from "../hooks";

describe('useGeneralContext', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })
  const initData = {
    isLoggedIn: true, userInfo: { "createdAt": "2021-10-21T08:36:53.248Z", "name": "Jimmie Thompson", "avatar": "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg", "username": "Mona_Kassulke14", "password": "EECsjlVnWIXfeuA", "id": "1" }
  }
  test('should return general context', () => {
    const setter = jest.fn();
    mockUseContext([initData
      , setter]);
    const data = useGeneralContext();
    expect(data.isLoggedIn).toEqual(true);
    expect(data.userInfo).toMatchObject({ "createdAt": "2021-10-21T08:36:53.248Z", "name": "Jimmie Thompson", "avatar": "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg", "username": "Mona_Kassulke14", "password": "EECsjlVnWIXfeuA", "id": "1" });
    setter({ other: 123 });
    expect(setter).toBeCalledTimes(1);
  });
});

describe('useIsUserLogIn', () => {
  beforeEach(() => {
    mockUseMemo();
  })
  afterEach(() => {
    jest.restoreAllMocks();
  })
  test('should return login is true', () => {
    (useGeneralContext as any) = () => ({
      isLoggedIn: true
    })
    expect(useIsUserLogIn()).toEqual(true);
  });
  test('should return login is false', () => {
    jest.mock("../hooks", () => ({
      useGeneralContext: () => ({
        isLoggedIn: false
      })
    }));
    expect(useIsUserLogIn()).toEqual(true);
  });
});
describe('useUserInfo', () => {
  beforeEach(() => {
    mockUseMemo();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should return user information', () => {
    (useGeneralContext as any) = () => ({
      userInfo: {
        name: "abc"
      }
    })
    expect(useUserInfo()).toMatchObject({
      name: "abc"
    })
  });
});