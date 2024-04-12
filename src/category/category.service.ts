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

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
