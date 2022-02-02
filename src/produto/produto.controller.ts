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
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Products")
@Controller("produto")
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.createPrisma(createProdutoDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.produtoService.findAllPrisma();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.produtoService.findOnePrisma(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.updatePrisma(+id, updateProdutoDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.produtoService.removePrisma(+id);
  }
}
