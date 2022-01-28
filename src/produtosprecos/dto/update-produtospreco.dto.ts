import { PartialType } from '@nestjs/swagger';
import { CreateProdutosprecoDto } from './create-produtospreco.dto';

export class UpdateProdutosprecoDto extends PartialType(CreateProdutosprecoDto) {}
