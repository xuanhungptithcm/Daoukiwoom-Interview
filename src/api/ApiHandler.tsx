import { useInitUserInfo } from "./hooks";

const ApiHandler = (): null => {
  useInitUserInfo();
  // to call API when first loading page
  return null;
};

export default ApiHandler;
