import { User } from "@/modules/user/entities/user.entity";
import { IsString } from "class-validator";

export class CreateUserDto extends User {
  @IsString()
  name: string;

  @IsString()
  email: string;
}
