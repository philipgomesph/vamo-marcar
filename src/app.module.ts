import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { RepositoryService } from './database/repository/repository.service';
import { RepositoryModule } from './database/repository/repository.module';
import { PrismaService } from './prisma/prisma/prisma.service';

@Module({
  imports: [ClientModule, RepositoryModule],
  controllers: [AppController],
  providers: [AppService, RepositoryService, PrismaService],
})
export class AppModule {}
