import { Module } from '@nestjs/common';
import { PreçosProdutoService } from './preços-produto.service';
import { PreçosProdutoController } from './preços-produto.controller';
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtStrategy } from "src/auth/models/jwt.strategy";

@Module({
  imports: [PrismaModule],
  controllers: [PreçosProdutoController],
  providers: [PreçosProdutoService, JwtStrategy]
})
export class PreçosProdutoModule {}
