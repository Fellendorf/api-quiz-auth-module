import { IsString } from 'class-validator';

export class CheckPasswordDTO {
  @IsString()
  password: string;
}
