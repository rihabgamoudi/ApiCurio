import { PartialType } from '@nestjs/swagger';
import { CreateAccessoireDto } from './create-accessoire.dto';

export class UpdateAccessoireDto extends PartialType(CreateAccessoireDto) {
    public id?: number ;
    public name?: string ;
    public description?: string ;
    public status?: boolean ;

    public materiaux?: string ;
}
