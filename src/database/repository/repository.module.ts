import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';

@Module({
  exports: [RepositoryService],
  providers: [RepositoryService],
})
export class RepositoryModule {}
