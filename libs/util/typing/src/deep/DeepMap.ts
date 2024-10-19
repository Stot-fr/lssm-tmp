import type { BrowserNativeObject } from "../browser/BrowserNativeObject";
import type { IsAny } from "../tester/IsAny";
import type { NestedValue } from "../types/NestedValue";
import type { NonUndefined } from "../mapping/NonUndefined";

export declare type DeepMap<T, TValue> = IsAny<T> extends true
  ? any
  : T extends BrowserNativeObject | NestedValue
    ? TValue
    : T extends object
      ? {
          [K in keyof T]: DeepMap<NonUndefined<T[K]>, TValue>;
        }
      : TValue;
