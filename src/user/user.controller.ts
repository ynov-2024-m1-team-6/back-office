import { Controller, Get, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getAllUsers(): Promise<{ message: string; data: User[] }> {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  async getUserById(
    @Param('id') id: string,
  ): Promise<{ message: string; data: User }> {
    return this.userService.getUserById(parseInt(id));
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: User,
  ): Promise<{ message: string; data: User }> {
    return this.userService.updateUser(parseInt(id), data);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<{ message: string }> {
    return this.userService.deleteUser(parseInt(id));
  }
}
