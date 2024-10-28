import type { Maybe } from '@lssm/lib-util.typescript';

/**
 * Represents a use-case handler.
 * Use-cases handlers are used to handle queries and commands.
 */
export interface QueryRepository<Entity> {
  findById(): Promise<Maybe<Entity>>;
  findOne(): Promise<Maybe<Entity>>;
  findMany(): Promise<Array<Entity>>;
}

/**
 * Represents a use-case handler.
 * Use-cases handlers are used to handle queries and commands.
 */
export interface CommandRepository<Entity, UpdateDto> {
  update(id: string, args: UpdateDto): Promise<Maybe<Entity>>;
  deleteOne(id: string): Promise<boolean>;
  deleteMany(ids: Array<string>): Promise<number>;
}

export type Repository<TEntity, UpdateDto> = QueryRepository<TEntity> &
  CommandRepository<TEntity, UpdateDto>;
