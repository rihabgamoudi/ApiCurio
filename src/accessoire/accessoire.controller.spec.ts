import { Test, TestingModule } from '@nestjs/testing';
import { AccessoireController } from './accessoire.controller';
import { AccessoireService } from './accessoire.service';

describe('AccessoireController', () => {
  let controller: AccessoireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessoireController],
      providers: [AccessoireService],
    }).compile();

    controller = module.get<AccessoireController>(AccessoireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
