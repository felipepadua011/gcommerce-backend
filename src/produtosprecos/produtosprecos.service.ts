import { Injectable } from "@nestjs/common";
import { ProdutosPrecos } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProdutosPrecosDto } from "./dto/create-produtospreco.dto";
import { UpdateProdutosprecoDto } from "./dto/update-produtospreco.dto";

@Injectable()
export class ProdutosprecosService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(
    createProdutosprecosDto: CreateProdutosPrecosDto
  ): Promise<ProdutosPrecos> {
    return await this.prisma.produtosPrecos.create({
      data: { ...createProdutosprecosDto },
    });
  }

  async findAllPrisma(): Promise<ProdutosPrecos[]> {
    return await this.prisma.produtosPrecos.findMany();
  }

  async findOnePrisma(id: number): Promise<ProdutosPrecos> {
    return await this.prisma.produtosPrecos.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    _updateProdutosprecoDto: UpdateProdutosprecoDto
  ): Promise<ProdutosPrecos> {
    return await this.prisma.produtosPrecos.update({
      data: { ..._updateProdutosprecoDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.produtosPrecos.delete({ where: { id } });
  }
}
