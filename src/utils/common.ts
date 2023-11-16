const combineClassName = (...className: string[]) => {
  return className.filter(Boolean).join(' ');
};

export const CommonUtils = {
  combineClassName,
};
