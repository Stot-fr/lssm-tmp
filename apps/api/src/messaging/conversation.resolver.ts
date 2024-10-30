import { CreateConversationDto } from '@lssm/module-core.messaging/application/dto/create-conversation.dto';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { ConversationService } from './conversation.service';
import { Conversation } from './models/Conversation';

@Resolver((_of) => Conversation)
export class ConversationResolver {
  constructor(private readonly conversationService: ConversationService) {}

  @Query(() => [Conversation])
  myConversations() {
    return this.conversationService.getMyConversations();
  }

  @Mutation(() => Conversation)
  createConversation(
    @Args('createConversation') createConversationDto: CreateConversationDto,
  ) {
    return this.conversationService.createConversation(createConversationDto);
  }

  @ResolveField()
  async members(@Parent() conversation: Conversation) {
    return this.conversationService.getMembers(conversation.id);
  }
}
