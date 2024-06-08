import { Body, Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/user/dto/create-user.dto';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { RolesGuard } from './roles/roles.guard';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    signIn(@Body() signInDto: LoginUserDto) {
      //  console.log("signInDto",signInDto)
      return this.authService.signIn(signInDto);
      
    }
    @UseGuards(JwtAuthGuard, RolesGuard)

    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
}
