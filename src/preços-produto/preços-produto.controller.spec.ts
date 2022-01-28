import { Test, TestingModule } from '@nestjs/testing';
import { PreçosProdutoController } from './preços-produto.controller';
import { PreçosProdutoService } from './preços-produto.service';

describe('PreçosProdutoController', () => {
  let controller: PreçosProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreçosProdutoController],
      providers: [PreçosProdutoService],
    }).compile();

    controller = module.get<PreçosProdutoController>(PreçosProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
