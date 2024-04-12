import { Test, TestingModule } from '@nestjs/testing';
import { PayementMethodService } from './payement-method.service';

describe('PayementMethodService', () => {
  let service: PayementMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayementMethodService],
    }).compile();

    service = module.get<PayementMethodService>(PayementMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
