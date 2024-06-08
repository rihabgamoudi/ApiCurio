import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  create(@Body() createProductDto: CreateProductDto) {
    console.log(createProductDto)
    return this.productsService.create(createProductDto);
  } 

  @Get('products-list')
  findAll() {
    return this.productsService.findAll();
  } 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOneById(+id);
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: number, @Body() UpdateProductDto: UpdateProductDto) {
   // Remplacez cela par la méthode pour obtenir l'ID de l'utilisateur authentifié
   let productId=1
    return this.productsService.update(id,productId, UpdateProductDto,);
  }  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
  @Post('delete-multiple')
  removeMultiple(@Body('') toDelete: number[]) {
 
    return this.productsService.removeMultiple(toDelete);
  } 
}
