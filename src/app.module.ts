import { PrismaModule } from "./prisma/prisma.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./usuario/usuario.module";

@Module({
  imports: [UsuarioModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
