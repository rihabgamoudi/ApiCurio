import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(   
    @InjectRepository(Product)
    private productResposity:Repository<Product>,
  ){}
  async create(CreateProductDto:CreateProductDto) {
    let newProduct=this.productResposity.create(CreateProductDto)
  console.log("CreateProductDto", this.productResposity.save(newProduct))
    return await this.productResposity.save(newProduct)
    
  } 

  async findAll() {
    return await this.productResposity.findAndCount()
  }


  async findOneById(id: number):Promise<object>{
    let  product= await this.productResposity.findOne({where:{id:id}})
     return product
    }

    async update( id: number ,productId: number ,UpdateProductDto: UpdateProductDto ) {
      const product = await this.productResposity.findOne({where:{id:id}});
      if (!product) {
        throw new NotFoundException(`product #${id} not found`);
      }
  
  
      const productPreload = await this.productResposity.preload({
        id: +id, 
        ...UpdateProductDto,
        updatedBy: productId,
      });  
  
      return this.productResposity.save(productPreload);
   
    }   


  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
