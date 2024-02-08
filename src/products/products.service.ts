import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    findAll(): string {
        return 'get all products';
    }

    findOne(id) {
        return `${id} id du produit`;
    }
}
