import { Module } from '@nestjs/common';
import { AdressService } from './adress.service';
import { AdressController } from './adress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adress } from './entities/adress.entity';

@Module({
  controllers: [AdressController],
  providers: [AdressService],
  imports:[TypeOrmModule.forFeature([Adress])]
})
export class AdressModule {}
