const combineClassName = (...className: string[]) => {
  return className.filter(Boolean).join(' ');
};

const convertArrayToString = (value: string[]) => {
  return value.join(' ');
};

export const CommonUtils = {
  combineClassName,
  convertArrayToString,
};
