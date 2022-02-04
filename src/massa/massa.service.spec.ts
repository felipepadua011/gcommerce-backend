import { Test, TestingModule } from '@nestjs/testing';
import { MassaService } from './massa.service';

describe('MassaService', () => {
  let service: MassaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MassaService],
    }).compile();

    service = module.get<MassaService>(MassaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
