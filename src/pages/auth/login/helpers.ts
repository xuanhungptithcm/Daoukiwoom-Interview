import validateEmail from "../../../helpers/validateEmail";
import validatePassword from "../../../helpers/validatePassword";
import { FormErrorMessage } from "./constants";

export const validateMessage = (value: string, name: string) => {
  let message = '';

  switch (name) {
    case 'email':
      message = (!validateEmail(value) && FormErrorMessage.email) as string;
      break;
    case 'password':
      message = (!validatePassword(value) && FormErrorMessage.password) as string; break;
    default:
      message = ''
      break;
  }
  return message;
}
