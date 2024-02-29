import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async getAllUsers(): Promise<{ message: string; data: User[] }> {
    try {
      const users = await prisma.user.findMany();
      return {
        message: 'success',
        data: users,
      };
    } catch (error) {
      throw error; // You may want to handle errors in a more sophisticated way
    }
  }
}
