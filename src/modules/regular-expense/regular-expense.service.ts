import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { RegularExpense } from 'src/entities/RegularExpense.entity';
import { Repository } from 'typeorm';
import { CreateRegularExpenseDto } from './dto/create-regular-expense.dto';
import { UpdateRegularExpenseDto } from './dto/update-regular-expense.dto';

@Injectable()
export class RegularExpenseService {
  constructor(
    @InjectRepository(RegularExpense)
    private readonly regularExpenseRepository: Repository<RegularExpense>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.regularExpenseRepository.find({
      skip: offset,
      take: limit
    });
  }

  async findOne(id: string) {
    const _result = await this.regularExpenseRepository.findOne(id);
    if (!_result) {
      throw new NotFoundException(`Regular expense #${id} not found`);
    }

    return _result;
  }

  create(createRegularExpenseDto: CreateRegularExpenseDto) {
    const regularExpense = this.regularExpenseRepository.create(
      createRegularExpenseDto,
    );
    return this.regularExpenseRepository.save(regularExpense);
  }

  async update(id: string, updateRegularExpenseDto: UpdateRegularExpenseDto) {
    const regularExpense = await this.regularExpenseRepository.preload({
      id: +id,
      ...updateRegularExpenseDto,
    });

    if (!regularExpense) {
      throw new NotFoundException(`Regular expense #${id} not found`);
    }

    return this.regularExpenseRepository.save(regularExpense);
  }

  async delete(id: string) {
    const existingRegularExpense = await this.regularExpenseRepository.findOne(
      id,
    );
    return await this.regularExpenseRepository.remove(existingRegularExpense);
  }
}
