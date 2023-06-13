import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { RepositoryService } from './database/repository/repository.service';
import { RepositoryModule } from './database/repository/repository.module';
import { PrismaModule } from './prisma/prisma/prisma.module';

@Module({
  imports: [ClientModule, RepositoryModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, RepositoryService],
})
export class AppModule {}
