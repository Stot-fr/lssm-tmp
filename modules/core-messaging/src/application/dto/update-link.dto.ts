import { PartialType } from '@nestjs/mapped-types';

import { CreateConversationDto } from './create-conversation.dto';

export class UpdateLinkDto extends PartialType(CreateConversationDto) {}
