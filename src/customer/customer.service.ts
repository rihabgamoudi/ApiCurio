import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(   
    @InjectRepository(Customer)
    private customerResposity:Repository<Customer>,
  ){}
  async create(createCustomerDto:CreateCustomerDto) {
    let newCustomer=this.customerResposity.create(createCustomerDto)
  
    return await this.customerResposity.save(newCustomer)
  }  
  async findAll() {
    return await this.customerResposity.findAndCount()
  }  

  async findOneById(id: number):Promise<object>{
    let  customer= await this.customerResposity.findOne({where:{id:id}})
     return customer
    }
    async update( id: number ,userId: number ,updateCustomerDto: UpdateCustomerDto ) {
      const customer = await this.customerResposity.findOne({where:{id:id}});
      if (!customer) {
        throw new NotFoundException(`color #${id} not found`);
      }
  
  
      const customerPreload = await this.customerResposity.preload({
        id: +id, 
        ...updateCustomerDto,
        updatedBy: userId,
      });  
  
      return this.customerResposity.save(customerPreload);
   
    }   

    async remove(id: string) {
      return await this.customerResposity.delete(id);
    }
    // toDisable: number[], idUser?: number
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
      if (await this.customerResposity.delete(toDelete)) {
        resultDelete = true
      } else
        resultDelete = false
        console.log("accessoireResposity",this.customerResposity)
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
