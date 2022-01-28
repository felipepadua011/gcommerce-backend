import { Module } from '@nestjs/common';
import { PreçosProdutoService } from './preços-produto.service';
import { PreçosProdutoController } from './preços-produto.controller';

@Module({
  controllers: [PreçosProdutoController],
  providers: [PreçosProdutoService]
})
export class PreçosProdutoModule {}
