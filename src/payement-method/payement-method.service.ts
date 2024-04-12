import { Injectable } from '@nestjs/common';
import { CreatePayementMethodDto } from './dto/create-payement-method.dto';
import { UpdatePayementMethodDto } from './dto/update-payement-method.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PayementMethod } from './entities/payement-method.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PayementMethodService {
  constructor(   
    @InjectRepository(PayementMethod)
    private paymentResposity:Repository<PayementMethod>,
  ){}
  async create(CreatePayementMethodDto: CreatePayementMethodDto) {
    let newPayement=this.paymentResposity.create(CreatePayementMethodDto)
  
    return await this.paymentResposity.save(newPayement)
  }
 
  async findAll() {
    return await this.paymentResposity.findAndCount()
  }

  async findOneById(id: number):Promise<object>{
    let  payement= await this.paymentResposity.findOne({where:{id:id}})
     return payement
    }

  update(id: number, updatePayementMethodDto: UpdatePayementMethodDto) {
    return `This action updates a #${id} payementMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} payementMethod`;
  }
}
