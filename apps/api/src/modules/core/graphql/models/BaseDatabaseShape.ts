import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Base shape of a model', isAbstract: true })
export class BaseDatabaseShape {
  @Field((_type) => ID)
  id: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
