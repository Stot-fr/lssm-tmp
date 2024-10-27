import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { LinksModule } from './links/links.module';

@Module({
  imports: [GraphqlModule, LinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
