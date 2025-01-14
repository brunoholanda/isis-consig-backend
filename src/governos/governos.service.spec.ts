import { Test, TestingModule } from '@nestjs/testing';
import { GovernosService } from './governos.service';

describe('GovernosService', () => {
  let service: GovernosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GovernosService],
    }).compile();

    service = module.get<GovernosService>(GovernosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
