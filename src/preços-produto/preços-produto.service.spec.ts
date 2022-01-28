import { Test, TestingModule } from '@nestjs/testing';
import { PreçosProdutoService } from './preços-produto.service';

describe('PreçosProdutoService', () => {
  let service: PreçosProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreçosProdutoService],
    }).compile();

    service = module.get<PreçosProdutoService>(PreçosProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
