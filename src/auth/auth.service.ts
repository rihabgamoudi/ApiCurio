import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { jwtConstants } from './constants';
import { LoginUserDto } from 'src/user/dto/create-user.dto';

const bcrypt=require('bcrypt')
@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService
    ) {}


      async ValidateUser(email:string,password:string):Promise<any>{
        const user = await this.userService.findOne(email);
     console.log("user",user)
        if  (user){
          const isPasswordMatching =await bcrypt.compare(password,user.password);
          console.log('uuuu',isPasswordMatching)
          if(isPasswordMatching){
            const {token,password, ... result}=user;
            return result;
          }
        }
        return null;
      }
      async signIn (user:  LoginUserDto) {
        const objectUser :User= await this.ValidateUser(user.email,user.password)
     
        if (objectUser) {
         const idUser=await this.userService.findOne(user.email);
         const payload = { role:objectUser.email["name"], level:objectUser.email["level"],id:idUser};
         return{
          userId:idUser.id,
          access_token: this.jwtService.sign(payload, { secret: jwtConstants.secret }),
          role:idUser.role,

         };

        }
        else {
          throw new NotFoundException('Email et/ou mot de passe sont incorrects')
        }
       
        
      }
}
