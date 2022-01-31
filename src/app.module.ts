import { PrismaModule } from "./prisma/prisma.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./usuario/usuario.module";
import { ProdutoModule } from "./produto/produto.module";
import { AuthModule } from "./auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./auth/guards/roles.guard";
import { ProdutosprecosModule } from './produtosprecos/produtosprecos.module';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [UsuarioModule, PrismaModule, ProdutoModule, AuthModule, ProdutosprecosModule, CaslModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
