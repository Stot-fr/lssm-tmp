import { CreateConversationDto } from '@lssm/module-core.messaging/application/dto/create-conversation.dto';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { JwtAuthGuard } from '../../core/authentication/jwt-auth.guard';
import { ConversationService } from './conversation.service';
import { Conversation } from './models/Conversation';

@Resolver((_of) => Conversation)
export class ConversationResolver {
  constructor(private readonly conversationService: ConversationService) {}

  @Query(() => [Conversation])
  myConversations() {
    return this.conversationService.getMyConversations();
  }

  @UseGuards(JwtAuthGuard)
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
