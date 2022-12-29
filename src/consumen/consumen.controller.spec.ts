import { Test, TestingModule } from '@nestjs/testing';
import { ConsumenController } from './consumen.controller';
import { ConsumenService } from './consumen.service';

describe('ConsumenController', () => {
  let controller: ConsumenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumenController],
      providers: [ConsumenService],
    }).compile();

    controller = module.get<ConsumenController>(ConsumenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
