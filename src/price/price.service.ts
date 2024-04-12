import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Price } from './entities/price.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PriceService {
  constructor(   
    @InjectRepository(Price)
    private priceResposity:Repository<Price>,
  ){}
  async create(CreatePriceDto: CreatePriceDto) {
    let newPrice=this.priceResposity.create(CreatePriceDto)
    return await this.priceResposity.save(newPrice)
  }

  async findAll() { 
    return await this.priceResposity.findAndCount()
  }

  async findOneById(id: number):Promise<object>{
    let  price= await this.priceResposity.findOne({where:{id:id}})
     return price
    }

    async update( id: number ,userId: number ,UpdatePriceDto: UpdatePriceDto ) {
      const price = await this.priceResposity.findOne({where:{id:id}});
      if (!price) {
        throw new NotFoundException(`price #${id} not found`);
      }
  
  
      const pricePreload = await this.priceResposity.preload({
        id: +id, 
        ...UpdatePriceDto,
        updatedBy: userId,
      });  
  
      return this.priceResposity.save(pricePreload);
   
    }   

  remove(id: number) {
    return `This action removes a #${id} price`;
  }
}
