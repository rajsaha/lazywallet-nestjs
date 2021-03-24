import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRegularExpenseDto } from './dto/create-regular-expense.dto';
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
  findAll() {
    this.regularExpenseService.findAll();
  }

  @Get(':id')
  async findOne(@Param(':id') id: string) {
    const _result = await this.regularExpenseService.findOne(id);
    return _result;
  }

  async delete(@Param(':id') id: string) {
    const _result = await this.regularExpenseService.delete(id);
    return _result;
  }
}
