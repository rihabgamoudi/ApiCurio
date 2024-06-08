import { Module } from '@nestjs/common';
import { CostService } from './cost.service';
import { CostController } from './cost.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cost } from './entities/cost.entity';

@Module({
  controllers: [CostController],
  providers: [CostService],
  imports:[TypeOrmModule.forFeature([Cost])]
})
export class CostModule {}
