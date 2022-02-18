import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module'
import { CamposService } from './campos.service';
import { CamposController } from './campos.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CamposController],
  providers: [CamposService]
})
export class CamposModule {}
