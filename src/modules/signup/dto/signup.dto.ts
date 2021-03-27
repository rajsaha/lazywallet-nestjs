import { IsString } from 'class-validator';
export class SignupDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly username: string;

  @IsString()
  password: string;

  @IsString()
  readonly passwordConfirm: string;
}
