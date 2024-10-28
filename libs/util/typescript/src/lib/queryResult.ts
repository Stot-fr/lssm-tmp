import type { Primitive } from './Primitive';

export declare type PrimitiveJSONValue = string | number | boolean | undefined | null;
export declare type JSONValue = PrimitiveJSONValue | JSONArray | JSONObject;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface JSONArray extends Array<JSONValue> {}

export interface JSONObject {
  [key: string]: JSONValue;
}

// https://www.reddit.com/r/typescript/comments/hr19a2/cool_helper_type_that_will_allow_you_to/
export type Replaced<T, TReplace, TWith, TKeep = Primitive> = T extends TReplace | TKeep
  ? T extends TReplace
    ? TWith | Exclude<T, TReplace>
    : T
  : {
      [P in keyof T]: Replaced<T[P], TReplace, TWith, TKeep>;
    };

export declare type NonJsonValue<ExtraTypes> =
  | PrimitiveJSONValue
  | NonJsonArray<ExtraTypes>
  | NonJsonObject<ExtraTypes>
  | ExtraTypes;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NonJsonArray<ExtraTypes> extends Array<NonJsonValue<ExtraTypes>> {}

export interface NonJsonObject<ExtraTypes> {
  [key: string]: NonJsonValue<ExtraTypes>;
}

export type ExtendedJsonObject = NonJsonObject<bigint | Date>;

export type BigIntToString<T> = Replaced<T, bigint, string>;
export type DateToString<T> = Replaced<T, Date, string>;

// This utility type is used to get the return type of a service function
// and convert all bigint values to strings
// Use it to type the return value of a client side query
export type QueryResult<T> = DateToString<BigIntToString<T>>;
export type AwaitedResult<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
export type AwaitedQueryResult<T extends (...args: any) => any> = QueryResult<AwaitedResult<T>>;
