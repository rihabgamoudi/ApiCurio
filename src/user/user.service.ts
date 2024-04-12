import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(   
    @InjectRepository(User)
    private UserResposity:Repository<User>,
  ){}
  
   async create(createUserDto: CreateUserDto) {
  
    let newUser=this.UserResposity.create(createUserDto)
    newUser.isActive=true
    const tokenLength = 50;
    newUser.tokenValue = this.generateAlphabeticToken(tokenLength);
    newUser.password=(await this.hashPassword(newUser.password)).toString()
    return await this.UserResposity.save(newUser);
  }
  generateAlphabeticToken(length: number): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&$';
    let token = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        token += alphabet[randomIndex];
    }
    return token; 
}

async  hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Number of salt rounds to use for hashing
  const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;

 
}

async findUser(email:string,password:string):Promise<string>{
  console.log("email",email)
  const newUser = await this.UserResposity.findOne({  where: { email:email } });
  console.log("password",password)
 
  if (!newUser) {
    throw new Error('User not found');
  }
  else{
  const isPasswordValid = await bcrypt.compare(password, (newUser.password).toString());
   if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  return newUser.tokenValue
  }
}
findAll():Promise<[User[],number]> {
    
  return this.UserResposity.findAndCount()
}

async findOneById(id: number):Promise<object>{
  let  user= await this.UserResposity.findOne({where:{id:id}})
   return user
  }

  async update( id: number ,userId: number ,updateUserDto: UpdateUserDto ) {
    const user = await this.UserResposity.findOne({where:{id:id}});
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    if (updateUserDto.password) {
      updateUserDto.password = (await this.hashPassword(updateUserDto.password)).toString()
    }  

    const userPreload = await this.UserResposity.preload({
      id: +id, 
      ...updateUserDto,
      updatedBy: userId,
    });

    return this.UserResposity.save(userPreload);

  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
