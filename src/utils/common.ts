const combineClassName = <T = string | undefined>(...className: T[]) => {
  return className.filter(Boolean).join(' ');
};

const convertArrayToString = (value: string[]) => {
  return value.join(' ');
};

export const CommonUtils = {
  combineClassName,
  convertArrayToString,
};
