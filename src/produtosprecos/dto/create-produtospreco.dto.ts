import { IsNotEmpty, IsInt, IsString, IsDecimal, IsBoolean } from 'class-validator';

export class CreateProdutosprecoDto {

    @IsNotEmpty()
    @IsInt()
    codigo: number;

    @IsNotEmpty()
    @IsInt()
    produtoid: number;

    @IsNotEmpty()
    @IsInt()
    preco1: number;

    @IsNotEmpty()
    @IsInt()
    limitedesconto: number;

    @IsNotEmpty()
    @IsInt()
    promocaodesconto: number;

    @IsNotEmpty()
    @IsDecimal()
    precodesconto: number;

    @IsNotEmpty()
    @IsInt()
    precoliquido1: number;
}
