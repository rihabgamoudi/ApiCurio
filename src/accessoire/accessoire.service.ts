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
  async create(createAcessoireDto: CreateAccessoireDto) {
    let newAccessoire=this.accessoireResposity.create(createAcessoireDto)
  
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

 
   
  async remove(id: string) {
    return await this.accessoireResposity.delete(id);
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
      if (await this.accessoireResposity.delete(toDelete)) {
        resultDelete = true
      } else
        resultDelete = false
        console.log("accessoireResposity",this.accessoireResposity)
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

 