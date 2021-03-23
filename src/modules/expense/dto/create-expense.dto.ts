import { IsString } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly amount: string;

  @IsString()
  readonly typeId: string;
}
