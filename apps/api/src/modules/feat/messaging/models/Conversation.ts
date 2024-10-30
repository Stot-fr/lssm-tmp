import { Field, ObjectType } from '@nestjs/graphql';

import { BaseDatabaseShape } from '../../../core/graphql/models/BaseDatabaseShape';
import { ConversationMember } from './ConversationMember';
import { ConversationMessage } from './ConversationMessage';

@ObjectType({ description: 'Collection of messages' })
export class Conversation extends BaseDatabaseShape {
  @Field()
  title: string;

  @Field((_type) => [ConversationMessage])
  messages: ConversationMessage[];

  @Field((_type) => [ConversationMember])
  members: ConversationMember[];
}
