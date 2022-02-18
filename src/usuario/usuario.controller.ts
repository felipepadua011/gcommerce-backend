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
  Logger,
} from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "src/auth/decorators/roles.decorador";
import { Role } from "src/auth/models/role.enum";
import logger from "src/logger/logger";

const log = require('../logger/index')

@ApiTags("Users")
@Controller("usuario")
export class UsuarioController {
  private logger = new Logger(UsuarioController.name)

  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  findAll() {
    try {
    const result = this.usuarioService.findAll();
    logger.info("Um evento ocorreu.")
   log.info("Winston info")
   log.warn("Winston warn")
   log.error("Winston error")
   log.debug("Winston debug")
    return result;
  } catch (error) {
   logger.error(error.message);
  }
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  findOne(@Param("id") id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  update(@Param("id") id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.Admin)
  remove(@Param("id") id: string) {
    return this.usuarioService.remove(+id);
  }
}
