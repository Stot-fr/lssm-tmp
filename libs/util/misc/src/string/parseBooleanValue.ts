/**
 * Take it a string or undefined, and return a boolean or undefined.
 */
export const parseBooleanValue = (value: string | null | undefined) => {
  if (value === undefined) return undefined;
  return value === 'true';
};
