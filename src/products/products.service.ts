import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Product } from '../product/product.interface';

const prisma = new PrismaClient(); 

@Injectable()
export class ProductsService {

    // async findAll(): Promise<Product[]> {
    //     return await prisma.product.findMany();
    // }

    // async findOne(id: string) {
    //     return await prisma.product.findUnique({
    //         where: {
    //             id,
    //         }
    //     });
    // }

    async create(product: Product) {
        try {
            await prisma.product.create({
                data: product
            });
            
        } catch (error) {
            console.log(error);
            
        }
    }
}
