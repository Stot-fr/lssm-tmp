import type { BigIntToString, DateToString } from "../mapping/Converter";

export type QueryResult<T> = DateToString<BigIntToString<T>>;
export type AwaitedResult<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>;
export type AwaitedQueryResult<T extends (...args: any) => any> = QueryResult<
  AwaitedResult<T>
>;
