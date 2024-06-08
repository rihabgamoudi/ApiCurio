import { Module } from '@nestjs/common';
import { DeviceDetailService } from './device-detail.service';
import { DeviceDetailController } from './device-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceDetail } from './entities/device-detail.entity';
@Module({
  controllers: [DeviceDetailController],
  providers: [DeviceDetailService],
  imports:[TypeOrmModule.forFeature([DeviceDetail])] 
})
export class DeviceDetailModule {}
