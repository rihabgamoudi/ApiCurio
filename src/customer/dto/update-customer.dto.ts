import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
    public id: number ;
    public firstName: string ;
    public lastName: string ;
    public email: string ;
    public adress: string ;
    public telephone: number ;
    public picture?: string ;
}
