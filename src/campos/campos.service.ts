import { Injectable } from '@nestjs/common';
import { CamposAlterados } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCampoDto } from './dto/create-campo.dto';
import { UpdateCampoDto } from './dto/update-campo.dto';

@Injectable()
export class CamposService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(
    createCampoDto: CreateCampoDto
  ): Promise<CamposAlterados> {
    return await this.prisma.camposAlterados.create({
      data: { ...createCampoDto },
    });
  }

  async findAllPrisma(): Promise<CamposAlterados[]> {
    return await this.prisma.camposAlterados.findMany();
  }


  async findOnePrisma(id: number): Promise<CamposAlterados> {
    return await this.prisma.camposAlterados.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    _updateCampoDto: UpdateCampoDto
  ): Promise<CamposAlterados> {
    return await this.prisma.camposAlterados.update({
      data: { ..._updateCampoDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.camposAlterados.delete({ where: { id } });
  }
}
