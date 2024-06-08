export class CreateUserDto {
    id: number;
  
    firstName: string;
    lastName: string;
    picture:string;
    role: string;
    telephone:number;
    email: string;
  
    password: string;
     
}
export class LoginUserDto {
    email: string;
  
    password: string;
    rememberMe?:boolean;
}
