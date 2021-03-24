import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsBoolean, IsNumber } from 'class-validator';
import { CreateExpenseDto } from 'src/modules/expense/dto/create-expense.dto';

export class CreateRegularExpenseDto extends PartialType(CreateExpenseDto) {
  @IsBoolean()
  readonly repeat: Boolean;

  @IsNumber({}, { each: true })
  readonly days: number[];
}
