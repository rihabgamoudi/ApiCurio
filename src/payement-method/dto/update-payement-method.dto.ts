import { PartialType } from '@nestjs/swagger';
import { CreatePayementMethodDto } from './create-payement-method.dto';

export class UpdatePayementMethodDto extends PartialType(CreatePayementMethodDto) {}
