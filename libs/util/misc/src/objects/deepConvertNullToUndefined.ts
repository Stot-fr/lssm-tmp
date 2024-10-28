import type { DeepReplaceNullByUndefined } from '@lssm/lib-util.typescript';

export const deepReplaceNullToUndefined = <T>(
  obj: T,
): DeepReplaceNullByUndefined<T> => {
  if (obj === null) {
    return undefined as DeepReplaceNullByUndefined<T>;
  }
  if (typeof obj !== 'object') {
    return obj as DeepReplaceNullByUndefined<T>;
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = deepReplaceNullToUndefined(value);
    return acc;
  }, {} as any);
};
