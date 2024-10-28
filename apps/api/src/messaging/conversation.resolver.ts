import { Query, Resolver } from '@nestjs/graphql';

import { ConversationService } from './conversation.service';
import { Conversation } from './models/Conversation';

@Resolver((_of) => Conversation)
export class ConversationResolver {
  constructor(private readonly conversationService: ConversationService) {}

  @Query(() => [Conversation])
  myConversations() {
    return this.conversationService.getMyConversations();
  }
}
