import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateMessageDTO } from "./create-message.dto";

export class UpdateMessageDTO extends PartialType(CreateMessageDTO) {
  @IsBoolean()
  @IsOptional()
  readonly read?: boolean
}
