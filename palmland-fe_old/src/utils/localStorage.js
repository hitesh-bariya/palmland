import { isBrowser } from "../helper/isBrowser";

export const localStorage = () => {
  if (isBrowser) {
    return window.localStorage;
  }
};
