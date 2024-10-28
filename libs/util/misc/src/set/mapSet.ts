export const mapSet = <SetType, ResType>(
  set: Set<SetType>,
  fn: (item: SetType) => ResType,
): Array<ResType> => {
  const result: Array<ResType> = [];
  set.forEach((item) => result.push(fn(item)));
  return result;
};
