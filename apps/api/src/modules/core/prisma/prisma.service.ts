import { db, PrismaClient } from '@lssm/lib-service.database';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit {
  public readonly client: PrismaClient = db;

  constructor() {}

  async onModuleInit() {
    await this.client.$connect();
  }

  get _() {
    return this.client;
  }

  // async enableShutdownHooks(app: INestApplication) {
  //   this.$on('beforeExit', async () => {
  //     await app.close();
  //   });
  // }
}
