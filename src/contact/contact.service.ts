import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(   
    @InjectRepository(Contact)
    private contactResposity:Repository<Contact>,
  ){}
  async create( CreateContactDto: CreateContactDto) {
    let newContact=this.contactResposity.create( CreateContactDto)
  
    return await this.contactResposity.save(newContact)
  }  
 

  async findAll() {
    return await this.contactResposity.findAndCount()
  }

  async findOneById(id: number):Promise<object>{
    let  contact= await this.contactResposity.findOne({where:{id:id}})
     return contact
    }
    async update( id: number ,userId: number ,UpdateContactDto: UpdateContactDto ) {
      const contact = await this.contactResposity.findOne({where:{id:id}});
      if (!contact) {
        throw new NotFoundException(`contact #${id} not found`);
      }
  
  
      const contactPreload = await this.contactResposity.preload({
        id: +id, 
        ...UpdateContactDto,
        updatedBy: userId,
      });  
  
      return this.contactResposity.save(contactPreload);
   
    }  

 

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
