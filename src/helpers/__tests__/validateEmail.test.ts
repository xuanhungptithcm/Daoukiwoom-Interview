import validateEmail from "../validateEmail";

describe('validateEmail', () => {
  test('should valid email', () => {
    expect(validateEmail('abc@gmail.com')).toEqual(true);
    expect(validateEmail('123123@bbbbb.com')).toEqual(true);
    expect(validateEmail('_123_@bbbbb.com')).toEqual(true);
  });
  test('should invalid email', () => {
    expect(validateEmail('')).toEqual(false);
    expect(validateEmail('abc@gmail')).toEqual(false);
    expect(validateEmail('abc@gmail')).toEqual(false);
    expect(validateEmail('@gmail')).toEqual(false);
    expect(validateEmail('11111111')).toEqual(false);
  });
});