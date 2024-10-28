export const mapFiltered = <Input, Transformed, Result>(
  arr: Array<Input>,
  mapFn: (item: Input) => Transformed,
  filterFn: (item: Transformed) => boolean,
): Array<Result> => {
  return arr.reduce<Array<Result>>((acc, item) => {
    const mappedItem = mapFn(item);
    if (filterFn(mappedItem)) {
      acc.push(mappedItem as unknown as Result);
    }
    return acc;
  }, []);
};
