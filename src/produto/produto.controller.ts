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
import { Roles } from "src/auth/pers.decorador";
import { Role } from "src/auth/role.enum";

@Controller("produto")
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.Admin)
  @Roles(Role.User)
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.createPrisma(createProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAllPrisma();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.Admin)
  @Roles(Role.User)
  findOne(@Param("id") id: string) {
    return this.produtoService.findOnePrisma(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.Admin)
  @Roles(Role.User)
  update(@Param("id") id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.updatePrisma(+id, updateProdutoDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.Admin)
  @Roles(Role.User)
  remove(@Param("id") id: string) {
    return this.produtoService.removePrisma(+id);
  }
}
