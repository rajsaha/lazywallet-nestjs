import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateRegularExpenseDto } from './dto/create-regular-expense.dto';
import { UpdateRegularExpenseDto } from './dto/update-regular-expense.dto';
import { RegularExpenseService } from './regular-expense.service';

@Controller('regular-expense')
export class RegularExpenseController {
  constructor(private readonly regularExpenseService: RegularExpenseService) {}

  @Post()
  async create(@Body() createRegularExpenseDto: CreateRegularExpenseDto) {
    const _result = await this.regularExpenseService.create(
      createRegularExpenseDto,
    );
    return _result;
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.regularExpenseService.findAll(paginationQuery);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const _result = await this.regularExpenseService.findOne(id);
    return _result;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRegularExpenseDto: UpdateRegularExpenseDto) {
      const _result = await this.regularExpenseService.update(id, updateRegularExpenseDto);
      return _result;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const _result = await this.regularExpenseService.delete(id);
    return _result;
  }
}
