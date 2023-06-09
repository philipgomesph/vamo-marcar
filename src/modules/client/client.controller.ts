import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { IClient } from './client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() data: IClient) {
    console.log(data);
    return this.clientService.createClient(data);
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    return this.clientService.showClient(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: IClient) {
    return this.clientService.updateClient(data, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.clientService.deleteClient(id);
  }
}
