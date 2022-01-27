import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { UpdateProdutoDto } from "./dto/update-produto.dto";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/auth/decorators/roles.decorador";
import { Role } from "src/auth/models/role.enum";
import { RolesGuard } from "src/auth/guards/roles.guard";

@Controller("produto")
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.User, Role.Admin)
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.createPrisma(createProdutoDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.User, Role.Admin)
  findAll() {
    return this.produtoService.findAllPrisma();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.User, Role.Admin)
  findOne(@Param("id") id: string) {
    return this.produtoService.findOnePrisma(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.User, Role.Admin)
  update(@Param("id") id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.updatePrisma(+id, updateProdutoDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.User, Role.Admin)
  remove(@Param("id") id: string) {
    return this.produtoService.removePrisma(+id);
  }
}
