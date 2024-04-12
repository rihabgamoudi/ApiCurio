import { Test, TestingModule } from '@nestjs/testing';
import { AccessoireService } from './accessoire.service';

describe('AccessoireService', () => {
  let service: AccessoireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessoireService],
    }).compile();

    service = module.get<AccessoireService>(AccessoireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
