const classNames = (...classes: (string | undefined | { [key: string]: boolean })[]): string => {
  return classes.filter(Boolean).map((item) => {
      if (typeof item === 'object') {
          return Object.keys(item).filter((key) => item[key]).join(' ');
      }
      return item;
  }).join(' ');
};

export default classNames;