import { CreateConversationDto } from '@lssm/module-core.messaging/application/dto/create-conversation.dto';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConversationService {
  constructor(private readonly prisma: PrismaService) {}

  async getMyConversations() {
    return this.prisma.conversation.findMany();
  }

  async createConversation(_createConversationDto: CreateConversationDto) {
    return this.prisma.conversation.create({
      data: {},
    });
  }

  async getMembers(id: string) {
    return this.prisma.conversation
      .findUnique({
        where: {
          id,
        },
      })
      .members();
  }
}
