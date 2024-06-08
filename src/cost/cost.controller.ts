import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostService } from './cost.service';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';

@Controller('cost')
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Post('create')
  create(@Body() createCostDto: CreateCostDto) {
    // return "hello"
    return this.costService.create(createCostDto);
  }

  @Get('cost-list')
  findAll() {
    return this.costService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costService.findOneById(+id);
  }

  @Patch(':id')
  async updateCost(@Param('id') id: number, @Body() updateCostDto: UpdateCostDto) {
   // Remplacez cela par la méthode pour obtenir l'ID de l'utilisateur authentifié
   let userId=1
    return this.costService.update(id,userId, updateCostDto,);
  } 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costService.remove(id);
  }
  
  @Post('delete-multiple')
  removeMultiple(@Body('') toDelete: number[]) {
 
    return this.costService.removeMultiple(toDelete);
  } 

}
