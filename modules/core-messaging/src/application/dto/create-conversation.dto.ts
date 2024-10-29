import { UuidV7Scalar } from '@lssm/lib-feat.core-module/application/dtos/uuid';
import { Field } from '@nestjs/graphql';

export class CreateConversationDto {
  @Field(() => [UuidV7Scalar])
  members: string[];
}
