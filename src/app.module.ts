import { PrismaModule } from "./prisma/prisma.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./usuario/usuario.module";
import { ProdutoModule } from "./produto/produto.module";
import { AuthModule } from "./auth/auth.module";
import { ProdutosprecosModule } from "./produtosprecos/produtosprecos.module";
import { RoleModule } from './role/role.module';
import { LogModule } from "./log/log.module";

@Module({
  imports: [
    UsuarioModule,
    PrismaModule,
    ProdutoModule,
    AuthModule,
    ProdutosprecosModule,
    RoleModule,
    LogModule,
    
