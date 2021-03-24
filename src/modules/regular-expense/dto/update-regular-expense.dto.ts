import { PartialType } from "@nestjs/mapped-types";
import { CreateRegularExpenseDto } from "./create-regular-expense.dto";

export class UpdateRegularExpenseDto extends PartialType(CreateRegularExpenseDto) {}
