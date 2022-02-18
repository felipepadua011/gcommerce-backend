import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CamposService } from './campos.service';
import { CreateCampoDto } from './dto/create-campo.dto';
import { UpdateCampoDto } from './dto/update-campo.dto';

@Controller('campos')
export class CamposController {
  constructor(private readonly camposService: CamposService) {}

  @Post()
  create(@Body() createCampoDto: CreateCampoDto) {
    return this.camposService.createPrisma(createCampoDto);
  }

  @Get()
  findAll() {
    return this.camposService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.camposService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampoDto: UpdateCampoDto) {
    return this.camposService.updatePrisma(+id, updateCampoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.camposService.removePrisma(+id);
  }
}
