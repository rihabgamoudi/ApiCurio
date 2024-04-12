import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetail } from './entities/detail.entity';

@Module({
  controllers: [DetailsController],
  providers: [DetailsService],
  imports:[TypeOrmModule.forFeature([ProductDetail])]  
})
export class DetailsModule {}
