import { IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly amount: number;

  @IsString()
  readonly typeId: string;
}
