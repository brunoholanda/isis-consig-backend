import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userDto: { nome: string; email: string; password: string; role: string }) {
    return this.usersService.create(userDto);
  }
}
