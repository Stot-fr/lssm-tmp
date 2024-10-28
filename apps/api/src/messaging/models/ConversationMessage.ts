import { Field, ObjectType } from '@nestjs/graphql';

import { BaseDatabaseShape } from '../../graphql/models/Conversation';
import { Conversation } from './Conversation';
import { ConversationMember } from './ConversationMember';

@ObjectType({ description: 'Message within a conversation' })
export class ConversationMessage extends BaseDatabaseShape {
  @Field()
  content: string;

  @Field()
  conversationId: string;

  @Field((_type) => Conversation)
  conversation: Conversation;

  @Field()
  senderId: string;

  @Field((_type) => ConversationMember)
  sender: ConversationMember;
}
