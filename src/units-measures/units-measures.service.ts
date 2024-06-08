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
    async remove(id: string) {
      return await this.unitsResposity.delete(id);
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
        if (await this.unitsResposity.delete(toDelete)) {
          resultDelete = true
        } else
          resultDelete = false
          console.log("unitsResposity",this.unitsResposity)
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
