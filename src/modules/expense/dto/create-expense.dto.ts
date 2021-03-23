import { IsString } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly amount: number;

  @IsString()
  readonly typeId: string;
}
