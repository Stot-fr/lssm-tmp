import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { ConversationResolver } from './conversation.resolver';
import { ConversationService } from './conversation.service';

@Module({
  imports: [PrismaModule],
  providers: [ConversationResolver, ConversationService],
})
export class MessagingModule {}
