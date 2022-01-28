import { PartialType } from '@nestjs/swagger';
import { CreatePreçosProdutoDto } from './create-preços-produto.dto';

export class UpdatePreçosProdutoDto extends PartialType(CreatePreçosProdutoDto) {}
