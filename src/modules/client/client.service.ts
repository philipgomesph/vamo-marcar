import { Injectable } from '@nestjs/common';
import { RepositoryService } from 'src/database/repository/repository.service';
import { IClient } from './client.dto';
import { serverTimestamp } from 'firebase/firestore';

@Injectable()
export class ClientService {
  constructor(private repositoryService: RepositoryService) {}
  async createClient(data: IClient) {
    data.createAt = new Date();
    console.log(data);
    const docRef = this.repositoryService.create(data, 'clients');

    return docRef;
  }

  async showClient(id: string) {
    console.log(id);
    const data = this.repositoryService.findOneById('clients', id);

    return data;
  }

  async updateClient(data: IClient, id: string) {
    return this.repositoryService.update('clients', data, id);
  }

  async deleteClient(id: string) {
    console.log(id);
    return this.repositoryService.delete('clients', id);
  }
}
