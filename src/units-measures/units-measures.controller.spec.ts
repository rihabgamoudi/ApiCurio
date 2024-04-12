import { Test, TestingModule } from '@nestjs/testing';
import { UnitsMeasuresController } from './units-measures.controller';
import { UnitsMeasuresService } from './units-measures.service';

describe('UnitsMeasuresController', () => {
  let controller: UnitsMeasuresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitsMeasuresController],
      providers: [UnitsMeasuresService],
    }).compile();

    controller = module.get<UnitsMeasuresController>(UnitsMeasuresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
