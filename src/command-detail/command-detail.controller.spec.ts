import { Test, TestingModule } from '@nestjs/testing';
import { CommandDetailController } from './command-detail.controller';
import { CommandDetailService } from './command-detail.service';

describe('CommandDetailController', () => {
  let controller: CommandDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommandDetailController],
      providers: [CommandDetailService],
    }).compile();

    controller = module.get<CommandDetailController>(CommandDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
