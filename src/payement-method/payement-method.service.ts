import { Injectable, NotFoundException } from '@nestjs/common';
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

    async update( id: number ,userId: number ,updatePayementMethodDto: UpdatePayementMethodDto ) {
      const payement = await this.paymentResposity.findOne({where:{id:id}});
      if (!payement) {
        throw new NotFoundException(`payment #${id} not found`);
      }
  
  
      const payementPreload = await this.paymentResposity.preload({
        id: +id, 
        ...updatePayementMethodDto,
        updatedBy: userId,
      });  
  
      return this.paymentResposity.save(payementPreload);
   
    }   

  async remove(id: string) {
    return await this.paymentResposity.delete(id);
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
      if (await this.paymentResposity.delete(toDelete)) {
        resultDelete = true
      } else
        resultDelete = false
        console.log("paymentResposity",this.paymentResposity)
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
