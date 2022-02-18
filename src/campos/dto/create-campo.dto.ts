import {
  IsNotEmpty,
  IsString
} from "class-validator";

export class CreateCampoDto {

  @IsNotEmpty()
  @IsString()
  campo: string;

}
