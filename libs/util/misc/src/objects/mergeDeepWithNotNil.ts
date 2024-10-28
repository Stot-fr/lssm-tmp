const isNilOrEmpty = (value: unknown) => {
  return value === null || value === undefined || value === '';
};

export const mergeDeepWithNotNilLeft = <L, R>(left: L, right: R) => {
  if (isNilOrEmpty(left)) return right;
  if (isNilOrEmpty(right)) return left;
  return left;
};

export const mergeDeepWithNotNilRight = <L, R>(left: L, right: R) => {
  if (isNilOrEmpty(left)) return right;
  if (isNilOrEmpty(right)) return left;
  return right;
};
