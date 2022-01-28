import { IsNotEmpty, IsInt, IsString, IsDecimal, IsBoolean } from 'class-validator';


export class CreateProdutoDto {

    @IsNotEmpty()
    @IsInt()
    produto: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsInt()
    colecao: number;

    @IsNotEmpty()
    @IsString()
    grife: string;

    @IsNotEmpty()
    @IsInt()
    disponivel: number;

}

