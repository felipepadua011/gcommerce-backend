import { Test, TestingModule } from '@nestjs/testing';
import { MassaController } from './massa.controller';
import { MassaService } from './massa.service';

describe('MassaController', () => {
  let controller: MassaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MassaController],
      providers: [MassaService],
    }).compile();

    controller = module.get<MassaController>(MassaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
