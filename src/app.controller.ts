import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Post('login')
  // signIn(@Body() signInDto: Record<string, any>) {
  //   return this.authService.signIn(signInDto);
  // }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
