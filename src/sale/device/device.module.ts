import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { Device } from './entities/device.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [DeviceController],
  providers: [DeviceService],
  imports:[TypeOrmModule.forFeature([Device])] 
})
export class DeviceModule {}
