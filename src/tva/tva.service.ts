import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTvaDto } from './dto/create-tva.dto';
import { UpdateTvaDto } from './dto/update-tva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tva } from './entities/tva.entity';

@Injectable()
export class TvaService {
  constructor(   
    @InjectRepository(Tva)
    private tvaResposity:Repository<Tva>,
  ){}
  async create(CreateTvaDto: CreateTvaDto) {
    let newTva=this.tvaResposity.create(CreateTvaDto)
    return await this.tvaResposity.save(newTva)
  }

  findAll(): Promise<[Tva[],number]> {
    
    return this.tvaResposity.findAndCount()
  }
  

  async findOneById(id: number):Promise<object>{
    let  tva= await this.tvaResposity.findOne({where:{id:id}})
     return tva
    }


    async update( id: number ,userId: number ,UpdateTvaDto: UpdateTvaDto ) {
      const tva = await this.tvaResposity.findOne({where:{id:id}});
      if (!tva) {
        throw new NotFoundException(`tva #${id} not found`);
      }
  
  
      const tvaPreload = await this.tvaResposity.preload({
        id: +id, 
        ...UpdateTvaDto,
        updatedBy: userId,
      });  
  
      return this.tvaResposity.save(tvaPreload);
   
    }   

  remove(id: number) {
    return `This action removes a #${id} tva`;
  }
}
