import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../product/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    // @Get('getProducts')
    // async findAll(): Promise<Product[]> {
    //     return this.productService.findAll();
    // }

    // @Get('getProduct')
    // findOne(@Query('id') id) {
    //     return this.productService.findOne(id);
    // }

    @Post('create')
    create(@Body('productData') data: Product) {
        console.log(data);
        
        this.productService.create(data);
    }
}
