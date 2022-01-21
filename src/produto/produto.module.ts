import { Module } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { ProdutoController } from "./produto.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtStrategy } from "src/auth/jwt.strategy";

@Module({
  imports: [PrismaModule],
  controllers: [ProdutoController],
  providers: [ProdutoService, JwtStrategy],
})
export class ProdutoModule {}
