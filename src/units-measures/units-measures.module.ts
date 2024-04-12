import { Module } from '@nestjs/common';
import { UnitsMeasuresService } from './units-measures.service';
import { UnitsMeasuresController } from './units-measures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsMeasure } from './entities/units-measure.entity';

@Module({
  controllers: [UnitsMeasuresController],
  providers: [UnitsMeasuresService],
  imports:[TypeOrmModule.forFeature([UnitsMeasure])] 
})
export class UnitsMeasuresModule {}
