/**
 * Represents a use-case handler.
 * Use-cases handlers are used to handle queries and commands.
 */
export interface UseCase<TArgs, TResult> {
  /**
   * Executes a use-case.
   * @param args Parameters of the use-cases to execute.
   */
  execute(args: TArgs): Promise<TResult>;
}
