import { Test, TestingModule } from '@nestjs/testing';
import { GovernosController } from './governos.controller';

describe('GovernosController', () => {
  let controller: GovernosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GovernosController],
    }).compile();

    controller = module.get<GovernosController>(GovernosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
