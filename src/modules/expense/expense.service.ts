import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Expense } from './Expense.entity';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}

  findAll() {
    return this.expenseRepository.find();
  }

  async findOne(id: string) {
    const _result = await this.expenseRepository.findOne(id);
    if (!_result) {
      throw new NotFoundException(`Expense #${id} not found`);
    }

    return _result;
  }

  create(createExpenseDto: CreateExpenseDto) {
    const expense = this.expenseRepository.create(createExpenseDto);
    return this.expenseRepository.save(expense);
  }

  async delete(id: string) {
    const existingExpense = await this.findOne(id);
    if (!existingExpense) {
      throw new NotFoundException(`Expense #${id} not found`);
    }

    return await this.expenseRepository.delete(existingExpense);
  }
}
