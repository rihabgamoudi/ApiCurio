import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandDetailService } from './command-detail.service';
import { CreateCommandDetailDto } from './dto/create-command-detail.dto';
import { UpdateCommandDetailDto } from './dto/update-command-detail.dto';

@Controller('command-detail')
export class CommandDetailController {
  constructor(private readonly commandDetailService: CommandDetailService) {}

  @Post('create')
  create(@Body() createCommandDetailDto: CreateCommandDetailDto) {
    return this.commandDetailService.create(createCommandDetailDto);
  }

  @Get('command-detail-list')
  findAll() {
    return this.commandDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandDetailService.findOne(+id);
  }

  @Patch(':id')
  updateOrderDetail(@Param('id') id: string, @Body() updateCommandDetailDto: UpdateCommandDetailDto) {
    return this.commandDetailService.update(+id, updateCommandDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandDetailService.remove(+id);
  }
}
