import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { RepositoryModule } from 'src/database/repository/repository.module';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
//import { RepositoryService } from 'src/database/repository/repository.service';

@Module({
  imports: [RepositoryModule],
  controllers: [ClientController],
  providers: [ClientService, PrismaService],
})
export class ClientModule {}
