import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { RepositoryModule } from 'src/database/repository/repository.module';
//import { RepositoryService } from 'src/database/repository/repository.service';

@Module({
  imports: [RepositoryModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
