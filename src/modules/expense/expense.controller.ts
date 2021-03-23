import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ExpenseService } from './expense.service';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    const _result = await this.expenseService.create(createExpenseDto);
    return _result;
  }

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const _result = await this.expenseService.findOne(id);
    return _result;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const _result = await this.expenseService.delete(id);
    return _result;
  }
}
