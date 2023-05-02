const useDebounce = (func: Function, milliseconds?: number) => {
  const time = milliseconds || 400;
  let timer: number;

  return (event: UIEvent) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, time, event);
  };
};

export default useDebounce;
