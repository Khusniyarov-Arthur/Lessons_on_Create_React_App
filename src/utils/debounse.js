export const debounce = (fn, ms) => {
  let timeout;
  return () => {
    // в оригинале еще нужно собирать все аргкменты arguments, но т.к. их нет в моем примере я убрал аргументы
    // const fnCall = () => {fn.apply(this, arguments)}
    const fnCall = () => fn();
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

