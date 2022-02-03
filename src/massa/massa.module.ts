import { Module } from "@nestjs/common";
import { MassaService } from "./massa.service";
import { MassaController } from "./massa.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [MassaController],
  providers: [MassaService],
  imports: [PrismaModule],
})
export class MassaModule {}
