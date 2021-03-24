import { Column, Entity } from 'typeorm';
import { ExpenseContent } from './ExpenseContent.entity';

@Entity()
export class RegularExpense extends ExpenseContent {
  @Column()
  repeat: Boolean;

  @Column('json', { nullable: true })
  days: IDays;
}
