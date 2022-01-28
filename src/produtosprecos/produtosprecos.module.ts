import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module'
import { ProdutosprecosService } from './produtosprecos.service';
import { ProdutosprecosController } from './produtosprecos.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ProdutosprecosController],
  providers: [ProdutosprecosService]
})
export class ProdutosprecosModule {}
