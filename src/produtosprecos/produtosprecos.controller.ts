import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProdutosprecosService } from "./produtosprecos.service";
import { CreateProdutosPrecosDto } from "./dto/create-produtospreco.dto";
import { UpdateProdutosprecoDto } from "./dto/update-produtospreco.dto";

@Controller("produtosprecos")
export class ProdutosprecosController {
  constructor(private readonly produtosprecosService: ProdutosprecosService) {}

  @Post()
  create(@Body() createProdutosprecoDto: CreateProdutosPrecosDto) {
    return this.produtosprecosService.createPrisma(createProdutosprecoDto);
  }

  @Get()
  findAll() {
    return this.produtosprecosService.findAllPrisma();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.produtosprecosService.findOnePrisma(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProdutosprecoDto: UpdateProdutosprecoDto
  ) {
    return this.produtosprecosService.updatePrisma(+id, updateProdutosprecoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.produtosprecosService.removePrisma(+id);
  }
}
