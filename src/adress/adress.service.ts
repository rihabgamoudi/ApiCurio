import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Adress } from './entities/adress.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdressService {
  constructor(   
    @InjectRepository(Adress)
    private adressResposity:Repository<Adress>,
  ){}
  async create(CreateAdressDto:CreateAdressDto) {
    let newAdress=this.adressResposity.create(CreateAdressDto)
  
    return await this.adressResposity.save(newAdress)
  } 
 
  async findAll() {
    return await this.adressResposity.findAndCount()
  }

  async findOneById(id: number):Promise<object>{
    let  adress= await this.adressResposity.findOne({where:{id:id}})
     return adress
    }

    async update( id: number ,userId: number ,UpdateAdressDto: UpdateAdressDto ) {
      const adress = await this.adressResposity.findOne({where:{id:id}});
      if (!adress) {
        throw new NotFoundException(`adress #${id} not found`);
      }
  
  
      const adressPreload = await this.adressResposity.preload({
        id: +id, 
        ...UpdateAdressDto,
        updatedBy: userId,
      }); 
  
      return this.adressResposity.save(adressPreload);
   
    } 

  remove(id: number) {
    return `This action removes a #${id} adress`;
  }
}
