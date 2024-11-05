import { GraphQLScalarType } from 'graphql';

const UUID_v7_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function validate(uuid: unknown): string | never {
  if (typeof uuid !== 'string' || !UUID_v7_REGEX.test(uuid)) {
    throw new Error('invalid uuid');
  }
  return uuid;
}

export const UuidV7Scalar = new GraphQLScalarType({
  name: 'UuidV7',
  description: 'A simple uuid v7 parser',
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
  parseLiteral: (ast) => validate('value' in ast ? ast.value : null),
});
