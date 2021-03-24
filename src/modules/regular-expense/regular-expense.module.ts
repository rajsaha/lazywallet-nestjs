import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegularExpense } from 'src/entities/RegularExpense.entity';
import { RegularExpenseController } from './regular-expense.controller';
import { RegularExpenseService } from './regular-expense.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegularExpense])],
  providers: [RegularExpenseService],
  controllers: [RegularExpenseController],
})
export class RegularExpenseModule {}
