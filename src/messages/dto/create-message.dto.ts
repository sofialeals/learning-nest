import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMessageDTO {
  // é possível alterar a mensagem de erro
  // ex.: @IsString({
  //   message: 'Invalid text'
  // })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  readonly text: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  readonly from: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  readonly to: string;
}
