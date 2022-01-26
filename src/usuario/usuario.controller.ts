import { RolesGuard } from "../auth/guards/roles.guard";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "src/auth/decorators/roles.decorador";
import { Role } from "src/auth/models/role.enum";

@ApiTags('Users')
@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  findOne(@Param("id") id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(":id")
  @Roles(Role.Admin)
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  update(@Param("id") id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(":id")
  @Roles(Role.Admin)
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  remove(@Param("id") id: string) {
    return this.usuarioService.remove(+id);
  }
}
