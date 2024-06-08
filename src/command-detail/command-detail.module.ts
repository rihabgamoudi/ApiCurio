import { Module } from '@nestjs/common';
import { CommandDetailService } from './command-detail.service';
import { CommandDetailController } from './command-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandDetail } from './entities/command-detail.entity';

@Module({
  controllers: [CommandDetailController],
  providers: [CommandDetailService],
  imports:[TypeOrmModule.forFeature([CommandDetail])]

})

export class CommandDetailModule {

  
}
