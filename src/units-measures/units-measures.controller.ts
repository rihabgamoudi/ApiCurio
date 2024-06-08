import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnitsMeasuresService } from './units-measures.service';
import { CreateUnitsMeasureDto } from './dto/create-units-measure.dto';
import { UpdateUnitsMeasureDto } from './dto/update-units-measure.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('units-measures')
@ApiTags()
export class UnitsMeasuresController {
  constructor(private readonly unitsMeasuresService: UnitsMeasuresService) {}

  @Post('create')
  create(@Body() createUnitsMeasureDto: CreateUnitsMeasureDto) {
    return this.unitsMeasuresService.create(createUnitsMeasureDto);
  }

  @Get('units-list')
  findAll() {
    return this.unitsMeasuresService.findAll();
  } 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitsMeasuresService.findOneById(+id);
  }

  @Patch(':id')
  async updateUnits(@Param('id') id: number, @Body() UpdateUnitsMeasureDto: UpdateUnitsMeasureDto) {
   // Remplacez cela par la méthode pour obtenir l'ID de l'utilisateur authentifié
   let userId=1
    return this.unitsMeasuresService.update(id,userId, UpdateUnitsMeasureDto,);
  }  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitsMeasuresService.remove(id);
  }
  @Post('delete-multiple')
  removeMultiple(@Body('') toDelete: number[]) {
 
    return this.unitsMeasuresService.removeMultiple(toDelete);
  } 
}
