import { PartialType } from '@nestjs/swagger';
import { CreateAdressDto } from './create-adress.dto';

export class UpdateAdressDto extends PartialType(CreateAdressDto) {
    id?: number;
  
    title?: string;
  
    ville?: string;
  
    street?: string;
  
    codePostal?: string;
    
    pays?:string;
}
