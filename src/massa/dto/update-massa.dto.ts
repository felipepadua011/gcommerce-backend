import { PartialType } from '@nestjs/swagger';
import { CreateMassaDto } from './create-massa.dto';

export class UpdateMassaDto extends PartialType(CreateMassaDto) {}
