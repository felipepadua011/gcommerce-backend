import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { MassaService } from "./massa.service";
import { CreateMassaDto } from "./dto/create-massa.dto";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Massa")
@Controller("massa")
export class MassaController {
  constructor(private readonly massaService: MassaService) {}

  @Post()
  // @UseGuards(AuthGuard("jwt"))
  create(@Body() createMassaDto: CreateMassaDto) {
    return this.massaService.create(createMassaDto);
  }
  @Get()
  // @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.massaService.findAll();
  }
}
