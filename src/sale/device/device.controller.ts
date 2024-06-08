import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post('create')
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.deviceService.create(createDeviceDto);
  }

  @Get('device-list')
  findAll() {
    return this.deviceService.findAll();
  } 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceService.findOneById(+id);
  } 
 
 
  @Patch(':id')
  async updateDevice(@Param('id') id: number, @Body() updateDeviceDto: UpdateDeviceDto) {
   // Remplacez cela par la méthode pour obtenir l'ID de l'utilisateur authentifié
   let userId=1
    return this.deviceService.update(id,userId, updateDeviceDto,);
  } 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceService.remove(id);
  }
  @Post('delete-multiple')
  removeMultiple(@Body('') toDelete: number[]) {
 
    return this.deviceService.removeMultiple(toDelete);
  }
}
