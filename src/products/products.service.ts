import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindManyOptions, FindOptionsRelations, Repository } from 'typeorm';
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
 
    return await this.productResposity.save(newProduct)
    
  } 

  async findAll() {
    const options: FindManyOptions<Product> = {
      relations: ['productDetail',
      'productDetail.accessoireId',
      'productDetail.TVAId',
      'productDetail.markId',
      'productDetail.categoryId',
      'productDetail.unitsId',
      'productDetail.priceId',
      'pictures'
      ] 
    }; 
    const result = await this.productResposity.findAndCount(options);
    return result;
     
   
  }


  async findOneById(id: number):Promise<object>{
    let  product= await this.productResposity.findOne({relations:['productDetail','productDetail.accessoireId', 'productDetail.TVAId','productDetail.markId', 'productDetail.categoryId','productDetail.unitsId','productDetail.priceId','pictures'],where:{id:id}})
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


    async remove(id: string) {
      return await this.productResposity.delete(id);
    }
    async removeMultiple(toDelete: number[]) {   
     
      let resultDelete: boolean = null
      let resultDisable: boolean = null
      const allIntegers = toDelete.every(item => Number.isInteger(item));
  if (!allIntegers) {
      console.log('Invalid data in toDelete array');
      // Handle the error appropriately
      return;
  }
  
      if (toDelete.length != 0) {
        if (await this.productResposity.delete(toDelete)) {
          resultDelete = true
        } else
          resultDelete = false
          console.log("paymentResposity",this.productResposity)
      }
    //   if (toDisable.length != 0) {
    //     if (await this.accessoireResposity.update(toDisable, { updatedBy: idUser, updateAt: new Date(), isActive: false })) {
    //       resultDisable = true
    //     } else
    //       resultDisable = false
    //   }
    //   if (((toDelete.length != 0 && resultDelete == true) || (toDelete.length == 0 && resultDelete == null)) &&
    //     ((toDisable.length != 0 && resultDisable == true) || (toDisable.length == 0 && resultDisable == null))) {
    //     return true
    //   } else
    //     return false
    // }
    return true 
    }
}
