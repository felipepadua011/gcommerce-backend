import { Injectable } from '@nestjs/common';
import { ProdutoPrecos } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProdutosprecosDto } from './dto/create-produtospreco.dto';
import { UpdateProdutosprecoDto } from './dto/update-produtospreco.dto';

@Injectable()
export class ProdutosprecosService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(createProdutosprecosDto: CreateProdutosprecosDto): Promise<ProdutoPrecos> {
    return await this.prisma.produtoPrecos.create({
      data: { ...createProdutosprecosDto },
      });
  }

  async findAllPrisma(): Promise<ProdutoPrecos[]> {
    return await this.prisma.produtoPrecos.findMany();
  }

  async findOnePrisma(id: number): Promise<ProdutoPrecos> {
    return await this.prisma.produtoPrecos.findUnique({ where: { id } });
  } 

  async updatePrisma(
    id: number,
    _updateProdutosprecoDto: UpdateProdutosprecoDto
  ): Promise<ProdutoPrecos> {
    return await this.prisma.produtoPrecos.update({
      data: { ..._updateProdutosprecoDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.produtoprecos.delete({ where: { id } });
  }
}

