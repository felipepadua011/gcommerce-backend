import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsDecimal,
  IsBoolean,
} from "class-validator";

export class CreateProdutosPrecosDto {
  @IsNotEmpty()
  @IsInt()
  codigo: number;

  @IsNotEmpty()
  @IsString()
  produto: string;

  @IsNotEmpty()
  @IsInt()
  produtoid: number;

  @IsNotEmpty()
  preco1: number;

  @IsNotEmpty()
  @IsInt()
  limitedesconto: number;

  @IsNotEmpty()
  @IsInt()
  promocaodesconto: number;

  @IsNotEmpty()
  @IsInt()
  precoliquido1: number;
}
