import { UuidV7Scalar } from '@lssm/lib-feat.core-module/application/dtos/uuid';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateConversationDto {
  @Field(() => [UuidV7Scalar])
  members: string[];
}
