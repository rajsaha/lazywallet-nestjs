import { PartialType } from "@nestjs/mapped-types";
import { IsArray, IsBoolean } from "class-validator";
import IDays from "src/interfaces/IDays";
import { CreateExpenseDto } from "src/modules/expense/dto/create-expense.dto";

export class CreateRegularExpenseDto extends PartialType(CreateExpenseDto) {
    @IsBoolean()
    readonly repeat: Boolean;

    @IsArray()
    readonly days: IDays;
}
