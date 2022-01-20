import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { LoginDto } from "./../auth/dto/login.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma, Usuario } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtPayload } from "src/auth/jwt.strategy";

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha, 10);
    try {
      const createdUser = await this.prisma.usuario.create({ data });
      createdUser.senha = undefined;
      return createdUser;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        "Verifique os dados e tente novamente.",
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findByLogin(login: LoginDto): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: login.email,
      },
    });

    const senhaIgual = await bcrypt.compare(login.senha, user.senha);

    if (!user) {
      throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
    }

    if (!senhaIgual) {
      throw new HttpException("Senha inválida.", HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async validateUser(payload: JwtPayload): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      throw new HttpException("Token inválido.", HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateUsuarioDto): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha, 10);
    return await this.prisma.usuario.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({ where: { id } });
  }
}