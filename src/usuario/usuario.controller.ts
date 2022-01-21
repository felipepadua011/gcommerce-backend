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
import { UsuarioService } from "./usuario.service";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/auth/pers.decorador";
import { Role } from "src/auth/role.enum";

@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.Admin)
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.Admin)
  findOne(@Param("id") id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.Admin)
  update(@Param("id") id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  @Roles(Role.Admin)
  remove(@Param("id") id: string) {
    return this.usuarioService.remove(+id);
  }
}
