export const isBigIntString = (value: string): boolean => {
  try {
    BigInt(value);
    return true;
  } catch (_e) {
    return false;
  }
};
