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
  import { PreçosProdutoService } from './preços-produto.service';
  import { CreatePreçosProdutoDto } from './dto/create-preços-produto.dto';
  import { UpdatePreçosProdutoDto } from './dto/update-preços-produto.dto';

@Controller('preçosprodutos')
export class PreçosProdutoController {
  constructor(private readonly preçosProdutoService: PreçosProdutoService) {}

  @Post()
  create(@Body() createPreçosProdutoDto: CreatePreçosProdutoDto) {
    return this.preçosProdutoService.createPrisma(createPreçosProdutoDto);
  }

  @Get()
  findAll() {
    return this.preçosProdutoService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preçosProdutoService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreçosProdutoDto: UpdatePreçosProdutoDto) {
    return this.preçosProdutoService.updatePrisma(+id, updatePreçosProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preçosProdutoService.removePrisma(+id);
  }  
}
