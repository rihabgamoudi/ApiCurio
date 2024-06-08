import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccessoireService } from './accessoire.service';
import { CreateAccessoireDto } from './dto/create-accessoire.dto';
import { UpdateAccessoireDto } from './dto/update-accessoire.dto';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

@Controller('accessoire')
@ApiTags()
export class AccessoireController {
  constructor(private readonly accessoireService: AccessoireService) {}

  @Post('create')
  create(@Body() createAccessoireDto: CreateAccessoireDto) {
   
    return this.accessoireService.create(createAccessoireDto);
  } 
 
  @Get('accessory-list') 
  findAll() {
    return this.accessoireService.findAll();
  } 
 
  @Get(':id') 
  findOne(@Param('id') id: string) {
    return this.accessoireService.findOneById(+id);
  }

  @Patch(':id') 
  async updateAccessoire(@Param('id') id: number,@Body() UpdateAccessoireDto: UpdateAccessoireDto ){
    // ,@User('id') idUser: number
     let userId=1
   // Remplacez cela par la méthode pour obtenir l'ID de l'utilisateur authentifié
    return this.accessoireService.update(id,userId,UpdateAccessoireDto);
  }  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessoireService.remove(id);
  }
  
  @Post('delete-multiple')
  removeMultiple(@Body('') toDelete: number[]) {
 
    return this.accessoireService.removeMultiple(toDelete);
  } 
 
  
}
