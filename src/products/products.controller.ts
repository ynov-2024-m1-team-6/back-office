import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Get('getProducts')
    async findAll(): Promise<string> {
        return this.productService.findAll();
    }

    @Get('getProduct')
    findOne(@Query('id') id) {
        return this.productService.findOne(id);
    }
}
