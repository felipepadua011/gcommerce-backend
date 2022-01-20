import { IsNotEmpty, IsInt, IsString, IsDecimal } from 'class-validator';


export class CreateProdutoDto {

    @IsNotEmpty()
    @IsInt()
    codigo: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsString()
    categoria: string;

    @IsNotEmpty()
    @IsDecimal()
    precooriginal: number;

    @IsNotEmpty()
    @IsInt()
    porcentagemdesconto: number;

    @IsNotEmpty()
    @IsDecimal()
    precodesconto: number;
}

