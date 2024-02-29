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

  async getUserById(id: number): Promise<{ message: string; data: User }> {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        throw new Error('User not found');
      }
      return { message: 'success', data: user };
    } catch (error) {
      throw error;
    }
  }

  async updateUser(
    id: number,
    data: User,
  ): Promise<{ message: string; data: User }> {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { id },
      });

      if (!existingUser) {
        throw new Error('User not found for updating');
      }

      const updatedUser = await prisma.user.update({
        where: { id },
        data,
      });

      return { message: 'success', data: updatedUser };
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: number): Promise<{ message: string }> {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { id },
      });

      if (!existingUser) {
        throw new Error('User not found for deleting');
      }

      await prisma.user.delete({
        where: { id },
      });

      return { message: 'success' };
    } catch (error) {
      throw error;
    }
  }
}
