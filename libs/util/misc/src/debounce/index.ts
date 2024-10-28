/**
 * Debounces a function.
 * @param func The function to debounce.
 * @param timeout The timeout duration in milliseconds. Default is 300ms.
 * @returns The debounced function.
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  timeout = 300,
): ((...args: Parameters<T>) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
