import { useGeneralContext } from '../../../../components/context/hooks';
/* eslint-disable jest/no-mocks-import */
import { FormErrorMessage } from '../constants';
import { useSubmitForm, useValidateAndSetErrorMessage, useValidateInputForm } from '../hooks';
import { useLogin } from './../../../../api/hooks';
import { mockUseCallback } from './../../../../__mocks__/GenericReactMocks';

jest.mock("../../../../components/context/helpers.ts");
jest.mock("../../../../components/context/constants.ts");
describe('useValidateAndSetErrorMessage', () => {
  test('should setter messages', () => {
    let setterCb = jest.fn();
    const setter = jest.fn((fn) => setterCb = fn);
    mockUseCallback();
    const validateAndSetMessage = useValidateAndSetErrorMessage(setter);
    expect(setter).toBeCalledTimes(0);
    validateAndSetMessage('email', 'xuanhung@gmail.com');
    expect(setterCb({ other: '123' })).toMatchObject({
      other: '123',
      email: false
    });
    validateAndSetMessage('email', 'xuanhung@gmai');
    expect(setterCb({ other: '123' })).toMatchObject({
      other: '123',
      email: FormErrorMessage.email
    });

    validateAndSetMessage('password', 'abcACB123_');
    expect(setterCb({ other: '123' })).toMatchObject({
      other: '123',
      password: false
    });
    validateAndSetMessage('password', 'Abc123_');
    expect(setterCb({ other: '123' })).toMatchObject({
      other: '123',
      password: FormErrorMessage.password,
    });

  });
});

describe('useValidateInputForm', () => {
  test('should validate input form', () => {
    const handleValidateFrom = jest.fn();
    const setter = jest.fn();
    mockUseCallback();
    (useValidateAndSetErrorMessage as any) = () => handleValidateFrom;

    const handleValidate = useValidateInputForm(setter);
    handleValidate({
      target: {
        name: 'email',
        value: 'xuanhung'
      }
    } as any);
    expect(handleValidateFrom).toBeCalledWith('email', 'xuanhung');
    handleValidate({
      target: {
        name: 'password',
        value: '123123acbacb'
      }
    } as any);
    expect(handleValidateFrom).toBeCalledWith('password', '123123acbacb');
  });
});


describe('useSubmitForm', () => {
  test('should validate and login', () => {
    mockUseCallback();

    (useGeneralContext as any) = () => ({
      setGeneralContext: jest.fn()
    });

    const handleValidateFrom = jest.fn();
    const login = jest.fn();
    const setError = jest.fn();
    let setIsLoadingCB = jest.fn();
    const setIsLoading = jest.fn((fn) => setIsLoadingCB = fn);

    const errorMessage = {
      email: '',
      password: ''
    }
    const isLoading = false;

    (useValidateAndSetErrorMessage as any) = () => handleValidateFrom;
    (useLogin as any) = () => login;
    const handleSubmit = useSubmitForm(errorMessage, isLoading, setIsLoading, setError);

    handleSubmit({
      target: {
        email: {
          value: 'xuanhungptithcm@gmail.com'
        },
        password: {
          value: 'abcAbc123_'
        }
      }
    } as any);

    expect(handleValidateFrom).toBeCalledWith('email', 'xuanhungptithcm@gmail.com');
    expect(handleValidateFrom).toBeCalledWith('password', 'abcAbc123_');

    expect(login).toBeCalledWith({
      password: 'abcAbc123_',
      email: 'xuanhungptithcm@gmail.com'
    })
  });

  test('should invalid and cannot login', () => {
    mockUseCallback();

    (useGeneralContext as any) = () => ({
      setGeneralContext: jest.fn()
    });

    const handleValidateFrom = jest.fn();
    const login = jest.fn();
    const setError = jest.fn();
    let setIsLoadingCB = jest.fn();
    const setIsLoading = jest.fn((fn) => setIsLoadingCB = fn);

    let errorMessage = {
      email: 'abc',
      password: ''
    }
    const isLoading = false;

    (useValidateAndSetErrorMessage as any) = () => handleValidateFrom;
    (useLogin as any) = () => login;
    const handleSubmit = useSubmitForm(errorMessage, isLoading, setIsLoading, setError);

    handleSubmit({
      target: {
        email: {
          value: 'xuanhungptithcm@gmail.com'
        },
        password: {
          value: 'abcAbc123_'
        }
      }
    } as any);

    expect(handleValidateFrom).toBeCalledWith('email', 'xuanhungptithcm@gmail.com');
    expect(handleValidateFrom).toBeCalledWith('password', 'abcAbc123_');

    expect(login).toBeCalledTimes(0)
  });
});