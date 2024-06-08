import { PartialType } from '@nestjs/swagger';
import { CreateCommandDetailDto } from './create-command-detail.dto';

export class UpdateCommandDetailDto extends PartialType(CreateCommandDetailDto) {}
