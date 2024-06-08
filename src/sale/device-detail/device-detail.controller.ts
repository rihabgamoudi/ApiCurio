import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceDetailService } from './device-detail.service';
import { CreateDeviceDetailDto } from './dto/create-device-detail.dto';
import { UpdateDeviceDetailDto } from './dto/update-device-detail.dto';

@Controller('device-detail')
export class DeviceDetailController {
  constructor(private readonly deviceDetailService: DeviceDetailService) {}

  @Post()
  create(@Body() createDeviceDetailDto: CreateDeviceDetailDto) {
    return this.deviceDetailService.create(createDeviceDetailDto);
  }

  @Get()
  findAll() {
    return this.deviceDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDetailDto: UpdateDeviceDetailDto) {
    return this.deviceDetailService.update(+id, updateDeviceDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceDetailService.remove(+id);
  }
}
