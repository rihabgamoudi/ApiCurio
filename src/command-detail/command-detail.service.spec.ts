import { Test, TestingModule } from '@nestjs/testing';
import { CommandDetailService } from './command-detail.service';

describe('CommandDetailService', () => {
  let service: CommandDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandDetailService],
    }).compile();

    service = module.get<CommandDetailService>(CommandDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
