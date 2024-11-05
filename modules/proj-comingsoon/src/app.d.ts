/// <reference types="next/types" />
/// <reference types="nativewind/types" />

declare module '*.svg' {
  /**
   * Use `any` to avoid conflicts with
   * `@svgr/webpack` plugin or
   * `babel-plugin-inline-react-svg` plugin.
   */
  const content: string;

  export default content;
}
