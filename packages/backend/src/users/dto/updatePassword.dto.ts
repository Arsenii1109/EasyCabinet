import { IsNotEmpty } from "class-validator";

export class UpdatePasswordDto {
  @IsNotEmpty()
  oldPassword: string;
  newPassword: string;
}
