export const arrayToDictionary = (
  array: Array<string>,
): Record<keyof typeof array, true> => {
  return array.reduce(
    (acc, curr) => {
      acc[curr as any] = true;
      return acc;
    },
    {} as Record<keyof typeof array, true>,
  );
};
