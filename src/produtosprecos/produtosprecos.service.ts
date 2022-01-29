import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProdutosprecoDto } from './dto/create-produtospreco.dto';
import { UpdateProdutosprecoDto } from './dto/update-produtospreco.dto';

@Injectable()
export class ProdutosprecosService {

  async createPrisma(createProdutosprecoDto: CreateProdutosprecoDto): Promise<Produtospreco> {
    return await this.prisma.produtosprecos.create({
      data: { ...createProdutosprecoDto },
      });
  }

  async findAllPrisma(): Promise<Produtospreco[]> {
    return await this.prisma.produtosprecos.findMany();
  }

  async findOnePrisma(id: number): Promise<Produtospreco> {
    return await this.prisma.produtosprecos.findUnique({ where: { id } });
  } 

  async updatePrisma(
    id: number,
    _updateProdutosprecoDto: UpdateProdutosprecoDto
  ): Promise<Produtospreco> {
    return await this.prisma.produtosprecos.update({
      data: { ..._updateProdutosprecoDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.produtosprecos.delete({ where: { id } });
  }
}

