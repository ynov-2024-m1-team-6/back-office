import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Get('getProducts')
    @ApiOperation({ summary: 'Get all products' })
    @ApiTags('products')
    async findAll() {
        return this.productService.findAll();
    }

    @Get('getProduct')
    @ApiOperation({ summary: 'Get product' })
    @ApiQuery({ name: 'id', required: true })
    @ApiTags('products')
    findOne(@Query('id') id) {
        return this.productService.findOne(parseInt(id));
    }

    @Post('create')
    @ApiOperation({ summary: 'Create product' })
    @ApiBody({ type: Product, description: 'Product data' })
    @ApiTags('products')
    create(@Body('productData') data: Product) {
        return this.productService.create(data);
    }

    @Put('update')
    @ApiOperation({ summary: 'Update product' })
    @ApiParam({ name: 'id', required: true })
    @ApiParam({ name: 'productUpdateData', required: true })
    @ApiTags('products')
    update(@Body('productUpdateData') data: Product, @Body('id') id: number) {
        return this.productService.update(id, data);
    }

    @Delete('delete')
    @ApiOperation({ summary: 'Delete product' })
    @ApiQuery({ name: 'id', required: true })
    @ApiTags('products')
    delete(@Query('id') id) {
        return this.productService.delete(parseInt(id));
    }

    @Put('updateActivity')
    @ApiOperation({ summary: 'inverse active in product' })
    @ApiQuery({ name: 'id', required: true })
    @ApiTags('products')
    updateActivity(@Query('id') id) {
        return this.productService.updateActivity(parseInt(id));
    }
}
