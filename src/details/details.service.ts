import { Injectable } from '@nestjs/common';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDetail } from './entities/detail.entity';

@Injectable()
export class DetailsService {
  constructor(   
    @InjectRepository(ProductDetail)
    private DetailResposity:Repository<ProductDetail>,
  ){}
  async create( CreateDetailDto: CreateDetailDto) {
    let newDetail=this.DetailResposity.create( CreateDetailDto)
  
    return await this.DetailResposity.save(newDetail)
  } 

  findAll() {
    return `This action returns all details`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detail`;
  }

  update(id: number, updateDetailDto: UpdateDetailDto) {
    return `This action updates a #${id} detail`;
  }

  remove(id: number) {
    return `This action removes a #${id} detail`;
  }
}
