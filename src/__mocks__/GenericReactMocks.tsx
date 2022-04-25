/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export const mockUseCallback = () => {
  jest.spyOn(React, "useCallback").mockImplementation((fn) => fn);
};

export const mockUseMemo = () => {
  jest.spyOn(React, "useMemo").mockImplementation((fn) => fn());
};

let useEffectCleanups: any[];

export const mockUseEffect = () => {
  useEffectCleanups = [];
  jest.spyOn(React, "useEffect").mockImplementation((fn) => {
    const cleanup = fn();
    if (cleanup) {
      useEffectCleanups.push(cleanup);
    }
  });
};

export const mockUseEffectCleanups = () => {
  if (useEffectCleanups) useEffectCleanups.forEach((fn) => fn());
};

export const mockUseState = (mockValue?: any, mockSetter?: any) => {
  return (
    jest
      .spyOn(React, "useState")
      // @ts-ignore
      .mockImplementation((value: any) => {
        return [
          mockValue ? mockValue : value,
          mockSetter ? mockSetter : jest.fn(),
        ];
      })
  );
};

export const mockUseRef = (value?: any) => {
  const response = jest.fn((current) => ({
    current: value ?? current,
  }));
  // @ts-ignore
  return jest.spyOn(React, "useRef").mockImplementation(response);
};

export const mockUseContext = (mockValue?: any) => {
  return jest
    .spyOn(React, "useContext")
    .mockImplementation((value) => (mockValue ? mockValue : value));
};


export const mockUseHistory = (initialPath: string = "") => {
  const currentPath: string = initialPath;

  const mockedGoBack = jest.fn();
  const mockedGoForward = jest.fn();
  const mockedPush = jest.fn();
  const mockedReplace = jest.fn();
  const mockHistory = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      goBack: mockedGoBack,
      goForward: mockedGoForward,
      push: mockedPush,
      replace: mockedReplace,
      location: {
        pathname: currentPath,
      },
      history: mockHistory,
    }),
  }));

  return {
    currentPath,
    mockedPush,
    mockedGoBack,
    mockedGoForward,
    mockedReplace,
    mockHistory
  };
};