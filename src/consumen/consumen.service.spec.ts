import { Test, TestingModule } from '@nestjs/testing';
import { ConsumenService } from './consumen.service';

describe('ConsumenService', () => {
  let service: ConsumenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumenService],
    }).compile();

    service = module.get<ConsumenService>(ConsumenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
