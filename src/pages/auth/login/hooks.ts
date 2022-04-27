/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useCallback } from "react";
import { useLogin } from '../../../api/hooks';
import { validateMessage } from "./helpers";

export type TargetInputForm = {
  name: string;
  value: string;
}

export interface IMessage {
  email: string;
  password: string;
}

export const useValidateAndSetErrorMessage = (setError: Dispatch<SetStateAction<IMessage>>) => {
  return useCallback((name: string, value: string) => {
    setError((prev) => ({
      ...prev,
      [`${name}`]: validateMessage(value, name),
    }))
  }, [])
}


export const useValidateInputForm = (setError: Dispatch<SetStateAction<IMessage>>) => {
  const handleValidateFrom = useValidateAndSetErrorMessage(setError);

  return useCallback((e: React.SyntheticEvent) => {
    const { name, value } = e.target as typeof e.target & TargetInputForm;
    handleValidateFrom(name, value);
  }, []);
}

export const useSubmitForm = (errorMessage: IMessage, isLoading: boolean, setIsLoading: Dispatch<SetStateAction<boolean>>, setError: Dispatch<SetStateAction<IMessage>>) => {
  const handleValidateFrom = useValidateAndSetErrorMessage(setError);
  const login = useLogin();

  return useCallback((e: React.SyntheticEvent) => {

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;
    handleValidateFrom('email', email);
    handleValidateFrom('password', password);
    if (errorMessage.email || errorMessage.password || !email || !password) return;
    if (!isLoading) {
      login({
        email,
        password,
      });
      setIsLoading((prev) => !prev);
    }
  }, [login, isLoading, errorMessage])
}