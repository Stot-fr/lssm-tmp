export const isSomeEnum =
  <EnumType extends Record<string, string | number>>(enumType: EnumType) =>
  (token: unknown): token is EnumType[keyof EnumType] => {
    return Object.values(enumType).includes(token as EnumType[keyof EnumType]);
  };
