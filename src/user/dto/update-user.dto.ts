import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  
    public  firstName?: string;
    
    public lastName?: string;

    public email?: string;
  
    public password?: string;
  
    public role?: string; 
    public   telephone?: number;
    public tokenValue?: string;  
   
}
