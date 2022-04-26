import validatePassword from "../validatePassword";

describe('validatePassword', () => {
  test('should valid password', () => {
    expect(validatePassword('T@tas010110bdefewfewfew')).toEqual(true);
    expect(validatePassword('aaaaBB123_')).toEqual(true);
    expect(validatePassword('___aaaa___bbbbb____C_1')).toEqual(true);
  });
  test('should invalid password', () => {
    expect(validatePassword('')).toEqual(false);
    expect(validatePassword('12345678')).toEqual(false);
    expect(validatePassword('aaaabbbb')).toEqual(false);
    expect(validatePassword('1234567')).toEqual(false);
    expect(validatePassword('___________')).toEqual(false);
  });
});