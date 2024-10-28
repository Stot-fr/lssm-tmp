export const filteredMap = <Input, Result>(
  arr: Array<Input>,
  filterFn: (item: Input) => boolean,
  mapFn: (item: Input) => Result,
): Array<Result> => {
  return arr.reduce<Array<Result>>((acc, item) => {
    if (filterFn(item)) {
      acc.push(mapFn(item));
    }
    return acc;
  }, []);
};
