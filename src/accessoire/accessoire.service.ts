import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccessoireDto } from './dto/create-accessoire.dto';
import { UpdateAccessoireDto } from './dto/update-accessoire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Accessoire } from './entities/accessoire.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccessoireService {
  constructor(   
    @InjectRepository(Accessoire)
    private accessoireResposity:Repository<Accessoire>,
  ){}
  async create(createAceessoireDto: CreateAccessoireDto) {
    let newAccessoire=this.accessoireResposity.create(createAceessoireDto)
  
    return await this.accessoireResposity.save(newAccessoire)
  }

   async findAll() {
    return await this.accessoireResposity.findAndCount()
  }

  async findOneById(id: number):Promise<object>{
    let  accessoire= await this.accessoireResposity.findOne({where:{id:id}})
     return accessoire
    }

  async update( id: number ,userId: number ,UpdateAccessoireDto: UpdateAccessoireDto ) {
    const accessoire = await this.accessoireResposity.preload({
      id: +id, 
      ...UpdateAccessoireDto,
      updatedBy: userId, 
    }); 
    if (!accessoire) {
      throw new NotFoundException(`accessoire #${id} not found`);
    }

    return this.accessoireResposity.save(accessoire);
  
  }

 
   

  remove(id: number) {
    return `This action removes a #${id} accessoire`;
  }
}
