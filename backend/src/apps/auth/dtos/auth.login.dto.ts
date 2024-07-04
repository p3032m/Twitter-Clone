import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';

export class AuthLoginDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}
