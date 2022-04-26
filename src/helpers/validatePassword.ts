
const validatePassword = (password: string = '') => {
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
  return !!String(password).match(regex);
}
export default validatePassword;