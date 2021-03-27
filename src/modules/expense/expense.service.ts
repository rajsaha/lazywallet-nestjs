import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Expense } from '../../entities/Expense.entity';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.expenseRepository.find({
      skip: offset,
      take: limit
    });
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
    return await this.expenseRepository.delete(existingExpense);
  }
}
