import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, IsString, IsDecimal } from 'class-validator';


export class CreateProdutoDto {

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({
        example: '123456',
        description: `O campo código será utilizado para cadastrar um dado único para o produto`,
    })
    codigo: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'calça',
        description: `O campo nome será utilizado para cadastrar um dado para o produto`,
    })
    nome: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'calça preta, tamanho M....',
        description: `O campo descricao será utilizado para cadastrar informações sobre o produto`,
    })
    descricao: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Roupa Masculina',
        description: `O campo categoria será utilizado para cadastrar o tipo do produto`,
    })
    categoria: string;

    @IsNotEmpty()
    @IsDecimal()
    @ApiProperty({
        example: '100',
        description: `O campo precooriginal será utilizado para cadastrar um dado de valor para o produto`,
    })
    precooriginal: number;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({
        example: '10',
        description: `O campo porcentagemdesconto será utilizado para cadastrar o valor do desconto para o produto`,
    })
    porcentagemdesconto: number;

    @IsNotEmpty()
    @IsDecimal()
    @ApiProperty({
        example: '89',
        description: `O campo precodesconto será utilizado para cadastrar o valor do produto descontado de acordo com o porcentagemdesconto `,
    })
    precodesconto: number;
}

