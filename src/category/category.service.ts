import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(   
    @InjectRepository(Category)
    private categoryResposity:Repository<Category>,
  ){}
  async create(createCategoryDto:CreateCategoryDto) {
    let newColor=this.categoryResposity.create(createCategoryDto)
  
    return await this.categoryResposity.save(newColor)
  }  


  async findAll() {
    return await this.categoryResposity.findAndCount()
  }  

  async findOneById(id: number):Promise<object>{
    let  category= await this.categoryResposity.findOne({where:{id:id}})
     return category
    } 

    async update( id: number ,userId: number ,UpdateCategoryDto: UpdateCategoryDto ) {
      const category = await this.categoryResposity.findOne({where:{id:id}});
      if (!category) {
        throw new NotFoundException(`color #${id} not found`);
      }
  
  
      const categoryPreload = await this.categoryResposity.preload({
        id: +id, 
        ...UpdateCategoryDto,
        updatedBy: userId, 
      });  
  
      return this.categoryResposity.save(categoryPreload);
   
    }   

    async remove(id: string) {
      return await this.categoryResposity.delete(id);
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
        if (await this.categoryResposity.delete(toDelete)) {
          resultDelete = true
        } else
          resultDelete = false
          console.log("categoryResposity",this.categoryResposity)
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

