import { PartialType } from '@nestjs/swagger';
import { CreateUnitsMeasureDto } from './create-units-measure.dto';

export class UpdateUnitsMeasureDto extends PartialType(CreateUnitsMeasureDto) {
    id?: number;
  
    name?: string;
  
    description?: string;
  
    value?: string;
  
    type?: string;
}
