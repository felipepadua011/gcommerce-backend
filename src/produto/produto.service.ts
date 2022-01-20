import { Injectable } from "@nestjs/common";
import { Produto } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { UpdateProdutoDto } from "./dto/update-produto.dto";

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    return await this.prisma.produto.create({
      data: { ...createProdutoDto },
    });
  }

  async findAllPrisma(): Promise<Produto[]> {
    return await this.prisma.produto.findMany();
  }

  async findOnePrisma(id: number): Promise<Produto> {
    return await this.prisma.produto.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    _updateProdutoDto: UpdateProdutoDto
  ): Promise<Produto> {
    return await this.prisma.produto.update({
      data: { ..._updateProdutoDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.produto.delete({ where: { id } });
  }
}
