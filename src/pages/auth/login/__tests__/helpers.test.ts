import { FormErrorMessage } from "../constants";
import { validateMessage } from "../helpers";

describe('validateMessage', () => {
  test('should return email error message', () => {
    expect(validateMessage('', 'email')).toEqual(FormErrorMessage.email)
    expect(validateMessage('xuanhung@', 'email')).toEqual(FormErrorMessage.email)
  });
  test('should return password error message', () => {
    expect(validateMessage('12345678', 'password')).toEqual(FormErrorMessage.password)
    expect(validateMessage('Abc123_', 'password')).toEqual(FormErrorMessage.password)
    expect(validateMessage('Abc123123123', 'password')).toEqual(FormErrorMessage.password)
  });
  test('should return empty string', () => {
    expect(validateMessage('12345678', 'other key')).toEqual('')
    expect(validateMessage('Abc123_', 'other key')).toEqual('')
    expect(validateMessage('Abc123123123', 'other key')).toEqual('')
  });
});