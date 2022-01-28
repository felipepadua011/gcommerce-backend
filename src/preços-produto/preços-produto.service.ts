import { Injectable } from '@nestjs/common';
import { PreçosProduto } from './entities/preços-produto.entity';
import { PrismaService } from '../prisma/prisma.service'
import { CreatePreçosProdutoDto } from './dto/create-preços-produto.dto';
import { UpdatePreçosProdutoDto } from './dto/update-preços-produto.dto';

@Injectable()
export class PreçosProdutoService {
  prisma: any;

  async createPrisma(createPreçosProdutoDto: CreatePreçosProdutoDto): Promise<PreçosProduto> {
    return await this.prisma.preçosproduto.create({
      data: { ...createPreçosProdutoDto },
      });
  }
  
  // async createPrisma(createPreçosProdutoDto: CreatePreçosProdutoDto): Promise<PreçosProduto> {
  //   return await this.prisma.preçosproduto.create({
  //     data: { ...createPreçosProdutoDto },
  //   });
  // }

  async findAllPrisma(): Promise<PreçosProduto[]> {
    return await this.prisma.preçosproduto.findMany();
  }

  async findOnePrisma(id: number): Promise<PreçosProduto> {
    return await this.prisma.preçosproduto.findUnique({ where: { id } });
  } 


  async updatePrisma(
    id: number,
    _updatePreçosProdutoDto: UpdatePreçosProdutoDto
  ): Promise<PreçosProduto> {
    return await this.prisma.preçosproduto.update({
      data: { ..._updatePreçosProdutoDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.preçosproduto.delete({ where: { id } });
  }
}
