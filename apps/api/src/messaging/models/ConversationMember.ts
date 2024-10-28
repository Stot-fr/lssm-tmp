import { Field, ObjectType } from '@nestjs/graphql';

import { BaseDatabaseShape } from '../../graphql/models/Conversation';
import { Conversation } from './Conversation';
import { ConversationMessage } from './ConversationMessage';

@ObjectType({ description: 'Historized conversation membership' })
export class ConversationMember extends BaseDatabaseShape {
  @Field()
  conversationId: string;

  @Field((_type) => Conversation)
  conversation: Conversation;

  @Field()
  userAccountId: string;

  @Field((_type) => Date)
  userAccount: Date;

  @Field((_type) => [ConversationMessage])
  messages: Array<ConversationMessage>;
}
