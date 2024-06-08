import { PartialType } from '@nestjs/swagger';
import { CreateCostDto } from './create-cost.dto';

export class UpdateCostDto extends PartialType(CreateCostDto) {
    public id?: number ;
    public name?: string ;
    public description?: string ;
    public montant?: number ;
}
