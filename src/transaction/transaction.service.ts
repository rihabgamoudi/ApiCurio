import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(   
    @InjectRepository(Transaction)
    private transactionResposity:Repository<Transaction>,
  ){}
  async create(createTransactionDto: CreateTransactionDto) {
    let newTransaction=this.transactionResposity.create(createTransactionDto)
  
    return await this.transactionResposity.save(newTransaction)
  }
 
  async findAll() {
    return await this.transactionResposity.findAndCount()
  }

  async findOneById(id: number):Promise<object>{
    let  transaction= await this.transactionResposity.findOne({where:{id:id}})
     return transaction
    }

    async update( id: number ,userId: number ,updateTransactionDto: UpdateTransactionDto ) {
      const transaction = await this.transactionResposity.preload({
        id: +id, 
        ...updateTransactionDto,
        updatedBy: userId, 
      }); 
      if (!transaction) {
        throw new NotFoundException(`transaction #${id} not found`);
      }
  
      return this.transactionResposity.save(transaction);
    
    }

    async remove(id: string) {
      return await this.transactionResposity.delete(id);
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
        if (await this.transactionResposity.delete(toDelete)) {
          resultDelete = true
        } else
          resultDelete = false
          console.log("paymentResposity",this.transactionResposity)
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
