import { ProductDetail } from "src/details/entities/detail.entity";

export class CreateProductDto {
    id: number;
  
    name: string;
  
    description: string;
    productDeatil: ProductDetail[];

  
}
