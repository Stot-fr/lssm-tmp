import type { Maybe } from '@lssm/lib-util.typescript';

/**
 * Represents a use-case handler.
 * Use-cases handlers are used to handle queries and commands.
 */
export interface Repository<TEntity> {
  findById(): Promise<Maybe<TEntity>>;
  findOne(): Promise<Maybe<TEntity>>;
  findMany(): Promise<Array<TEntity>>;
}
