import { PartialType } from '@nestjs/swagger';
import { CreatePriceDto } from './create-price.dto';

export class UpdatePriceDto extends PartialType(CreatePriceDto) {
    id?: number;
  
    priceExcludingTax?: number;
  
    priceTTC?: number;
    
    retailPrice?:number;
    
    wholesalePrice?:number;
}
