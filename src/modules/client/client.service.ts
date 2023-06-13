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
    data.deleteAt = new Date();
    console.log(data);
    const prismaCreate = this.prisma.modelClient.create({
      data: {
        email: data.email,
        name: data.name,
        id: '123',
      },
    });
    //const docRef = this.repositoryService.create(data, 'clients');

    console.log(prismaCreate);
    return prismaCreate;
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
