import { Controller, Get, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get('getProducts')
    findAll(): string {
        return 'get all products';
    }

    @Get('getProduct')
    findOne(@Query('id') id) {
        return `${id} id du produit`;
    }
}
