// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logDebug = (...data: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    console.debug(...data);
  }
};
