import { Test, TestingModule } from '@nestjs/testing';
import { UnitsMeasuresService } from './units-measures.service';

describe('UnitsMeasuresService', () => {
  let service: UnitsMeasuresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitsMeasuresService],
    }).compile();

    service = module.get<UnitsMeasuresService>(UnitsMeasuresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
