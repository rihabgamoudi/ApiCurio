import { Test, TestingModule } from '@nestjs/testing';
import { DeviceDetailService } from './device-detail.service';

describe('DeviceDetailService', () => {
  let service: DeviceDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceDetailService],
    }).compile();

    service = module.get<DeviceDetailService>(DeviceDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
