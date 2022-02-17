import { PrismaModule } from "./prisma/prisma.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./usuario/usuario.module";
import { ProdutoModule } from "./produto/produto.module";
import { AuthModule } from "./auth/auth.module";
import { ProdutosprecosModule } from "./produtosprecos/produtosprecos.module";
import { RoleModule } from './role/role.module';
// import { LogsModule } from './logs/logs.module';
// import { CamposModule } from './campos/campos.module';

@Module({
  imports: [
    UsuarioModule,
    PrismaModule,
    ProdutoModule,
    AuthModule,
    ProdutosprecosModule,
    RoleModule,
    // LogsModule,
    // CamposModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
