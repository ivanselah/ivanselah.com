const combineClassName = <T = string | undefined>(...className: T[]) => {
  return className.filter(Boolean).join(' ');
};

const convertArrayToString = (value: string[]) => {
  return value.join(' ');
};

const setLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

const getLocalStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

export const CommonUtils = {
  combineClassName,
  convertArrayToString,
  setLocalStorage,
  getLocalStorage,
} as const;
