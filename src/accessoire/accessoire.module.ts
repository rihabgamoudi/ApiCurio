import { Module } from '@nestjs/common';
import { AccessoireService } from './accessoire.service';
import { AccessoireController } from './accessoire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accessoire } from './entities/accessoire.entity';

@Module({
  controllers: [AccessoireController],
  providers: [AccessoireService],
  imports:[TypeOrmModule.forFeature([Accessoire])]
})
export class AccessoireModule {}
