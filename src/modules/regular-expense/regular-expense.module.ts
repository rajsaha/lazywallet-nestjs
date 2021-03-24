import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { REDays } from 'src/entities/REDays.entity';
import { RegularExpense } from 'src/entities/RegularExpense.entity';
import { RegularExpenseController } from './regular-expense.controller';
import { RegularExpenseService } from './regular-expense.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegularExpense, REDays])],
  providers: [RegularExpenseService],
  controllers: [RegularExpenseController],
})
export class RegularExpenseModule {}
