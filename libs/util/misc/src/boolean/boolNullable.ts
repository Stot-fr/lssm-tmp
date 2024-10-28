export const boolNullable = (value?: unknown): boolean | null => {
  switch (typeof value) {
    case 'boolean':
      return value;
    case 'object':
    case 'bigint':
    case 'number':
    case 'string':
      return !!value;
    case 'undefined':
    case 'function':
    case 'symbol':
    default:
      return null;
  }
};
