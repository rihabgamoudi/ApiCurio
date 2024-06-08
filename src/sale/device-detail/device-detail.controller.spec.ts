import { Test, TestingModule } from '@nestjs/testing';
import { DeviceDetailController } from './device-detail.controller';
import { DeviceDetailService } from './device-detail.service';

describe('DeviceDetailController', () => {
  let controller: DeviceDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceDetailController],
      providers: [DeviceDetailService],
    }).compile();

    controller = module.get<DeviceDetailController>(DeviceDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
