import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayementMethodService } from './payement-method.service';
import { CreatePayementMethodDto } from './dto/create-payement-method.dto';
import { UpdatePayementMethodDto } from './dto/update-payement-method.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('payement-method')
@ApiTags()
export class PayementMethodController {
  constructor(private readonly payementMethodService: PayementMethodService) {}

  @Post('create')
  create(@Body() createPayementMethodDto: CreatePayementMethodDto) {
  
    return this.payementMethodService.create(createPayementMethodDto);
  }

  @Get('payement-method-list')
  findAll() {
    return this.payementMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payementMethodService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayementMethodDto: UpdatePayementMethodDto) {
    return this.payementMethodService.update(+id, updatePayementMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payementMethodService.remove(+id);
  }
}
