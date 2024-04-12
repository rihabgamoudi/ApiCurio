import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUnitsMeasureDto } from './dto/create-units-measure.dto';
import { UpdateUnitsMeasureDto } from './dto/update-units-measure.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitsMeasure } from './entities/units-measure.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitsMeasuresService {
  constructor(   
    @InjectRepository(UnitsMeasure)
    private unitsResposity:Repository<UnitsMeasure>,
  ){}
  async create(CreateUnitsMeasureDto:CreateUnitsMeasureDto) {
    let newUnits=this.unitsResposity.create(CreateUnitsMeasureDto)
  
    return await this.unitsResposity.save(newUnits)
  } 

  async findAll() {
    return await this.unitsResposity.findAndCount()
  }


  async findOneById(id: number):Promise<object>{
    let  units= await this.unitsResposity.findOne({where:{id:id}})
     return units
    }

    async update( id: number ,userId: number ,UpdateUnitsMeasureDto: UpdateUnitsMeasureDto ) {
      const units = await this.unitsResposity.findOne({where:{id:id}});
      if (!units) {
        throw new NotFoundException(`units #${id} not found`);
      }
  
  
      const unitsPreload = await this.unitsResposity.preload({
        id: +id, 
        ...UpdateUnitsMeasureDto,
        updatedBy: userId,
      });  
  
      return this.unitsResposity.save(unitsPreload);
   
    }   
  remove(id: number) {
    return `This action removes a #${id} unitsMeasure`;
  }
}
