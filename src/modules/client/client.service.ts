import { Injectable } from '@nestjs/common';
import { RepositoryService } from 'src/database/repository/repository.service';
import { IClient } from './client.dto';
import { serverTimestamp } from 'firebase/firestore';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(
    private repositoryService: RepositoryService,
    private prisma: PrismaService,
  ) {}
  async createClient(data: IClient) {
    data.createAt = new Date();
    console.log(data);
    //const docRef = this.repositoryService.create(data, 'clients');

    console.log(data);
    const clientCreated = await this.prisma.client.create({
      data,
    });
    //return docRef;

    console.log(clientCreated);
    return { msg: 'Usuario criado com sucesso' };
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
