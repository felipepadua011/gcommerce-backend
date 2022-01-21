import { PrismaModule } from "./prisma/prisma.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./usuario/usuario.module";
import { ProdutoModule } from "./produto/produto.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [UsuarioModule, PrismaModule, ProdutoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
