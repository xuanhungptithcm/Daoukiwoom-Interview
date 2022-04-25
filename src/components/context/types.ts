import React from "react";

export type IContextState<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export type IReactContext<T> = React.Context<IContextState<T>>;

export interface IUserInfo {
  createdAt: string;
  name: string;
  avatar: string;
  username: string;
  password: string;
  id: string;
}


export interface IGeneralData {
  isLoggedIn: boolean;
  userInfo: IUserInfo;
}

export type IGenericProps = {
  // Property by default EMPTY
};