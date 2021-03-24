import { Entity } from 'typeorm';
import { ExpenseContent } from './ExpenseContent.entity';

@Entity()
export class Expense extends ExpenseContent {}
