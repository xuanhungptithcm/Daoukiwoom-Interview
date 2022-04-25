import validatePassword from "../validatePassword";

describe('validatePassword', () => {
  test('should valid password', () => {
    expect(validatePassword('12345678abc')).toEqual(true);
    expect(validatePassword('1234567a')).toEqual(true);
    expect(validatePassword('aaabbbccc123')).toEqual(true);
  });
  test('should invalid password', () => {
    expect(validatePassword('')).toEqual(false);
    expect(validatePassword('12345678')).toEqual(false);
    expect(validatePassword('aaaabbbb')).toEqual(false);
    expect(validatePassword('1234567')).toEqual(false);
    expect(validatePassword('___________')).toEqual(false);
  });
});