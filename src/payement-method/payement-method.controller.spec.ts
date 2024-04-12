import { Test, TestingModule } from '@nestjs/testing';
import { PayementMethodController } from './payement-method.controller';
import { PayementMethodService } from './payement-method.service';

describe('PayementMethodController', () => {
  let controller: PayementMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayementMethodController],
      providers: [PayementMethodService],
    }).compile();

    controller = module.get<PayementMethodController>(PayementMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
