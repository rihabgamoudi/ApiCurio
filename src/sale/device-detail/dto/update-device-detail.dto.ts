import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceDetailDto } from './create-device-detail.dto';

export class UpdateDeviceDetailDto extends PartialType(CreateDeviceDetailDto) {}
