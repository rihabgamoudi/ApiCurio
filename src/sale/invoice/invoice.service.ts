import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class InvoiceService {
  constructor(   
    @InjectRepository(Invoice)
    private invoiceResposity:Repository<Invoice>,
  ){}
  async create(createInvoiceDto:CreateInvoiceDto) {
    let newInvoice=this.invoiceResposity.create(createInvoiceDto)
 
    return await this.invoiceResposity.save(newInvoice)
    
  } 


  async findAll(): Promise<[Invoice[], number]> {
    const options: FindManyOptions<Invoice> = {
      relations: ['CustomerId','transactions','commandId'],
    };

    return await this.invoiceResposity.findAndCount(options);
  }

  async findOneById(id: number):Promise<object>{
    let  invoice= await this.invoiceResposity.findOne({relations:['CustomerId', 'invoicedetail', 'transactions','commandId'],where:{id:id}})
     return invoice
    }  
 

    async update( id: number ,userId: number ,updateDeviceDto: UpdateInvoiceDto ) {
      const invoice = await this.invoiceResposity.findOne({where:{id:id}});
      if (!invoice) {
        throw new NotFoundException(`invoice #${id} not found`);
      }
  
  
      const invoicePreload = await this.invoiceResposity.preload({
        id: +id, 
        ...updateDeviceDto,
        updatedBy: userId, 
      });  
  
      return this.invoiceResposity.save(invoicePreload);
   
    }    

    async remove(id: string) {
      return await this.invoiceResposity.delete(id);
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
        if (await this.invoiceResposity.delete(toDelete)) {
          resultDelete = true
        } else
          resultDelete = false
         
      }
  
    return true
    }
}
