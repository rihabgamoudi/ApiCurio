import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cost } from './entities/cost.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CostService {
  constructor(   
    @InjectRepository(Cost)
    private costResposity:Repository<Cost>,
  ){}
  async create(createCostDto:CreateCostDto) {
    let newCost=this.costResposity.create(createCostDto)
  
    return await this.costResposity.save(newCost)
  }  

  async findAll() {
    return await this.costResposity.findAndCount()
  } 

  async findOneById(id: number):Promise<object>{
    let  cost= await this.costResposity.findOne({where:{id:id}})
     return cost
    } 

    async update( id: number ,userId: number ,updateCostDto: UpdateCostDto ) {
      const cost = await this.costResposity.findOne({where:{id:id}});
      if (!cost) {
        throw new NotFoundException(`cost #${id} not found`);
      }
  
  
      const costPreload = await this.costResposity.preload({
        id: +id, 
        ...updateCostDto,
        updatedBy: userId,
      });  
  
      return this.costResposity.save(costPreload);
   
    }  

    async remove(id: string) {
      return await this.costResposity.delete(id);
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
      if (await this.costResposity.delete(toDelete)) {
        resultDelete = true
      } else
        resultDelete = false
        console.log("costResposity",this.costResposity)
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
