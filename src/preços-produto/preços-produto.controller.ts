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
  import { AuthGuard } from "@nestjs/passport";
  import { Roles } from "src/auth/decorators/roles.decorador";
  import { Role } from "src/auth/models/role.enum";
  import { RolesGuard } from "src/auth/guards/roles.guard";

@Controller('preçosprodutos')
export class PreçosProdutoController {
  constructor(private readonly preçosProdutoService: PreçosProdutoService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.User, Role.Admin)
  create(@Body() createPreçosProdutoDto: CreatePreçosProdutoDto) {
    return this.preçosProdutoService.createPrisma(createPreçosProdutoDto);
  }

  @Get()
  findAll() {
    return this.preçosProdutoService.findAllPrisma();
  }

  @Get(':id')
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.User, Role.Admin)
  findOne(@Param('id') id: string) {
    return this.preçosProdutoService.findOnePrisma(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.User, Role.Admin)
  update(@Param('id') id: string, @Body() updatePreçosProdutoDto: UpdatePreçosProdutoDto) {
    return this.preçosProdutoService.updatePrisma(+id, updatePreçosProdutoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.User, Role.Admin)
  remove(@Param('id') id: string) {
    return this.preçosProdutoService.removePrisma(+id);
  }  
}
