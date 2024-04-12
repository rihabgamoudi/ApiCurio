import { Module } from '@nestjs/common';
import { PayementMethodService } from './payement-method.service';
import { PayementMethodController } from './payement-method.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayementMethod } from './entities/payement-method.entity';

@Module({
  controllers: [PayementMethodController],
  providers: [PayementMethodService],
  imports:[TypeOrmModule.forFeature([PayementMethod])]
})
export class PayementMethodModule {}
