export const debounce = (func: Function, delay: number = 500) => {
  let timer: number;

  return () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, delay);
  };
};
